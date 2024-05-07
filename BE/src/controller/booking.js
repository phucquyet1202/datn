import moment from "moment";
import mongoose from "mongoose";

import { BookingModel, RoomModel, VoucherModel } from "../models";
import { BookingValidate } from "../validate";
import { validateMiddleware } from "../middleware";
import {
  sendMailBooking,
  sendMailCancelBooking,
  sendMailSuccessBooking,
  sendResponse,
} from "../utils";

export const getAll = async (req, res) => {
  try {
    let query = {};

    if (req.query.id_hotel) {
      query.id_hotel = req.query.id_hotel;
    }

    if (req.query.status) {
      query.status = req.query.status;
    }

    const bookingList = await BookingModel.find(query)
      .populate({
        path: "id_user",
        populate: {
          path: "id_information",
          model: "Information",
        },
      })
      .populate({
        path: "list_room",
        populate: {
          path: "idRoom",
          populate: {
            path: "id_roomType",
            model: "RoomType",
          },
        },
      })
      .populate("id_payment");

    if (!bookingList || bookingList.length === 0) {
      return sendResponse(res, 200, "Không có danh sách đặt phòng", []);
    }

    return sendResponse(res, 200, "Danh sách đặt phòng", bookingList);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách đặt phòng"
    );
  }
};

export const getOne = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    const booking = await BookingModel.findById(req.params.id)
      .populate("id_payment")
      .populate({
        path: "list_room",
        populate: "idRoom",
      });

    if (!booking || booking.length === 0) {
      return sendResponse(res, 404, "Không có thông tin đặt phòng");
    }

    return sendResponse(res, 200, "Thông tin đặt phòng", booking);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách đặt phòng"
    );
  }
};

export const getBookingByUser = async (req, res) => {
  const user = req.user;

  try {
    const bookingUser = await BookingModel.find({ id_user: user._id })
      .populate("id_payment")
      .populate({
        path: "list_room",
        populate: {
          path: "idRoom",
          populate: {
            path: "id_roomType",
            model: "RoomType",
          },
        },
      });

    if (!bookingUser || bookingUser.length === 0) {
      return sendResponse(res, 404, "Người dùng chưa đặt phòng");
    }

    return sendResponse(
      res,
      200,
      "Danh sách đặt phòng của người dùng",
      bookingUser
    );
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách đặt phòng của người dùng"
    );
  }
};

export const create = async (req, res) => {
  const user = req.user;
  const { list_room, check_in, check_out, is_deposit_amount, id_voucher } =
    req.body;

  const roomIds = list_room.map((room) => room.idRoom);

  try {
    validateMiddleware(req, res, BookingValidate, async () => {
      const checkInDate = moment(check_in);
      const checkOutDate = moment(check_out);
      const currentDate = moment().startOf("day");

      if (
        checkInDate.isBefore(currentDate) ||
        checkOutDate.isBefore(currentDate) ||
        checkOutDate.isBefore(checkInDate)
      ) {
        return sendResponse(res, 400, "Vui lòng thực hiện đặt phòng lại");
      }

      const bookings = await BookingModel.find({
        status: { $nin: ["Thành công", "Đã hủy bỏ"] },
        "list_room.idRoom": { $in: roomIds },
        $or: [
          {
            $and: [
              { check_in: { $lte: check_in } },
              { check_out: { $gte: check_out } },
            ],
          },
          {
            $and: [{ check_in: { $gte: check_in, $lte: check_out } }],
          },
          {
            $and: [{ check_out: { $gte: check_in, $lte: check_out } }],
          },
        ],
      });

      const roomBooking = await RoomModel.findById(roomIds);

      if (bookings.length >= roomBooking.quantity) {
        return sendResponse(
          res,
          404,
          "Xin lỗi, số lượng phòng đã được đặt đã vượt quá số lượng phòng còn lại."
        );
      }

      let total = 0;

      bookings.map((bk) => {
        return (total = total + bk.list_room.quantity);
      });

      if (total >= roomBooking.list_rooms.length) {
        return sendResponse(res, 404, "Đã hết phòng");
      }

      const total1 = total + req.body.list_room[0].quantity;

      if (total1 > roomBooking.list_rooms.length) {
        return sendResponse(res, 404, "Đã hết phòng rồi");
      }

      if (req.body.list_room[0].quantity > roomBooking.list_rooms.length) {
        return sendResponse(res, 404, "Đặt quá nhiều phòng");
      }

      const userBooking = await BookingModel.findOne({
        id_user: user._id,
        status: "Chờ thanh toán",
      });

      if (userBooking) {
        return sendResponse(
          res,
          404,
          "Bạn có một đơn đặt phòng đang chờ thanh toán. Vui lòng thanh toán hoặc hủy đơn hàng trước khi tiếp tục."
        );
      }

      const firstDayOfMonth = moment().startOf("month").format("YYYY-MM-DD");
      const lastDayOfMonth = moment().endOf("month").format("YYYY-MM-DD");

      const bookingUser = await BookingModel.find({
        id_user: user._id,
        status: "Đã hủy bỏ",
        createdAt: { $gte: firstDayOfMonth, $lte: lastDayOfMonth },
      });

      if (bookingUser.length > 3) {
        return sendResponse(
          res,
          404,
          "Bạn đã hủy quá nhiều đơn đặt phòng trong tháng này. Vui lòng thử lại sau."
        );
      }

      if (id_voucher) {
        const voucher = await VoucherModel.findById(id_voucher);

        const voucher_user_list = voucher.user_list;
        const idu = req.user._id;

        await VoucherModel.findByIdAndUpdate(id_voucher, {
          user_list: [...voucher_user_list, idu],
        });
      }

      const data = await BookingModel.create({
        id_user: user._id,
        list_room: req.body.list_room[0],
        check_in: req.body.check_in,
        check_out: req.body.check_out,
        total_price: req.body.total_price,
        city: req.body.city,
        info: req.body.info,
        is_deposit_amount: is_deposit_amount,
      });

      if (!data) {
        return sendResponse(res, 404, "Đặt phòng thất bại");
      }

      const FCheck_in = moment(data.check_in).format("DD/MM/YYYY");
      const FCheck_out = moment(data.check_out).format("DD/MM/YYYY");

      sendMailBooking(
        user.email,
        user.id_information.name,
        FCheck_in,
        FCheck_out,
        data.total_price
      );

      return sendResponse(res, 200, "Đặt phòng thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const updateInfoBooking = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.isValidObjectId(id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    if (req.body.name === "" || req.body.phone === "" || req.body.cmt === "") {
      return sendResponse(res, 400, "Vui lòng điền đầy đủ thông tin");
    }

    const bk = await BookingModel.findById(id);

    if (bk.info.update) {
      return sendResponse(res, 400, "Chỉ được cập nhật thông tin 1 lần");
    }

    const booking = await BookingModel.findByIdAndUpdate(
      id,
      {
        info: {
          name: req.body.name,
          phone: req.body.phone,
          cmt: req.body.cmt,
          update: true,
        },
      },
      { new: true }
    );

    return sendResponse(res, 200, "Cập nhật thành công", booking);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { status, success, id_amenities, room_number } = req.body;

  try {
    if (!mongoose.isValidObjectId(id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    if (!status) {
      return sendResponse(res, 404, "Trạng thái không được để trống");
    }

    if (!success && status === "Đã nhận phòng") {
      return sendResponse(
        res,
        404,
        "Vui lòng kiểm tra xem người dùng đã thanh toán số tiền còn lại chưa"
      );
    }

    const booking = await BookingModel.findById(id);
    if (booking.status === "Đã hủy bỏ" || booking.status === "Thành công") {
      return sendResponse(res, 404, "Không thể cập nhật trạng thái");
    }

    const newBooking = await BookingModel.findOneAndUpdate(
      { _id: id },
      {
        status: status,
        success: success,
        id_amenities: id_amenities,
        room_number: room_number,
      },
      { new: true }
    ).populate({
      path: "id_user",
      populate: {
        path: "id_information",
      },
    });

    await Promise.all(
      newBooking.room_number.map(async (bk) => {
        await RoomModel.findOneAndUpdate(
          { "list_rooms._id": bk },
          { $set: { "list_rooms.$.status": true } },
          { new: true }
        );
      })
    );

    if (newBooking.status === "Đã hủy bỏ") {
      const check_in = moment(newBooking.check_in).format("DD/MM/YYYY");
      const check_out = moment(newBooking.check_out).format("DD/MM/YYYY");

      sendMailCancelBooking(
        newBooking.id_user.email,
        newBooking.id_user.id_information.name,
        check_in,
        check_out
      );
    }

    if (newBooking.status === "Thành công") {
      await Promise.all(
        newBooking.room_number.map(async (bk) => {
          await RoomModel.findOneAndUpdate(
            { "list_rooms._id": bk },
            { $set: { "list_rooms.$.status": false } },
            { new: true }
          );
        })
      );

      sendMailSuccessBooking(
        newBooking.id_user.email,
        newBooking.id_user.id_information.name
      );
    }

    return sendResponse(
      res,
      200,
      newBooking.status == "Đã hủy bỏ"
        ? "Hủy đặt phòng thành công"
        : "Cập nhật trạng thái thành công",
      newBooking
    );
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const calculateTotalAmountDay = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const datesInRange = [];

    const currentDate = new Date(start);
    while (currentDate <= end) {
      datesInRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const result = await BookingModel.aggregate([
      {
        $match: {
          payment_status: true,
          createdAt: {
            $gte: new Date(startDate),
            $lte: new Date(endDate),
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          totalAmount: { $sum: "$total_price" },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    const logData = {};

    result.forEach((item) => {
      logData[item._id] = item.totalAmount;
    });

    datesInRange.forEach((date) => {
      const dateString = date.toISOString().split("T")[0];
      if (!logData.hasOwnProperty(dateString)) {
        logData[dateString] = 0;
      }
    });

    const dailyTotals = datesInRange.map((date) => {
      const dateString = date.toISOString().split("T")[0];
      return {
        name: dateString,
        total: logData[dateString],
      };
    });

    return sendResponse(res, 200, "Thông tin tổng giá theo ngày", dailyTotals);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const calculateTotalAmountMonth = async (req, res) => {
  try {
    const { startYear, endYear } = req.body;

    const startDate = new Date(`${startYear}-01T00:00:00.000Z`);
    const endDate = new Date(`${endYear}-12-31T23:59:59.999Z`);

    const result = await BookingModel.aggregate([
      {
        $match: {
          payment_status: true,
          createdAt: {
            $gte: startDate,
            $lte: endDate,
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          totalAmount: { $sum: "$total_price" },
        },
      },
    ]);

    const finalData = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const formattedMonth = currentDate.toISOString().slice(0, 7);

      const foundMonth = result.find((item) => item._id === formattedMonth);

      if (currentDate >= startDate && currentDate <= endDate) {
        if (foundMonth) {
          finalData.push({
            name: formattedMonth,
            total: foundMonth.totalAmount,
          });
        } else {
          finalData.push({ name: formattedMonth, total: 0 });
        }
      }

      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return sendResponse(res, 200, "Thông tin tổng giá theo tháng", finalData);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const getTotalStatus = async (req, res) => {
  try {
    let matchCondition = {};

    const orderStatusCounts = await BookingModel.aggregate([
      { $match: matchCondition },
      { $group: { _id: "$status", value: { $sum: 1 } } },
      { $project: { name: "$_id", value: 1, _id: 0 } },
    ]);

    return sendResponse(res, 200, "TỔng trạng thái", orderStatusCounts);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};
