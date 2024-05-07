import mongoose from "mongoose";

import { RoomValidate } from "../validate";
import { RoomModel, HotelModel, BookingModel } from "../models";
import { validateFormMiddleware } from "../middleware";
import { sendResponse, uploadImageToCloudinary } from "../utils";

export const getAll = async (req, res) => {
  try {
    const roomList = await RoomModel.find()
      .select("-createdAt -updatedAt")
      .populate({
        path: "id_roomType id_hotel id_amenities",
        select: "_id name price",
      });

    if (!roomList || roomList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách phòng");
    }

    return sendResponse(res, 200, "Danh sách phòng", roomList);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy danh sách phòng");
  }
};

export const getOne = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    const room = await RoomModel.findById(req.params.id).populate(
      "id_amenities id_hotel id_roomType"
    );

    if (!room || room.length === 0) {
      return sendResponse(res, 404, "Không có thông tin phòng");
    }

    return sendResponse(res, 200, "Thông tin phòng", room);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy thông tin phòng");
  }
};

export const create = async (req, res) => {
  const imagesArray = [];
  for (const field in req.files) {
    if (req.files.hasOwnProperty(field)) {
      const file = req.files[field];
      imagesArray.push({
        name: field,
        url: file.path,
      });
    }
  }
  req.fields.images = imagesArray;

  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(",");

    const amenities = id_amenities.map(
      (item) => new mongoose.Types.ObjectId(item)
    );
    req.fields.id_amenities = amenities;
  }
  if (req.fields.list_rooms) {
    const list_rooms = req.fields.list_rooms.split(",");

    const list_room = list_rooms.map((item) => ({
      room: item,
    }));
    req.fields.list_rooms = list_room;
  }

  try {
    validateFormMiddleware(req, res, RoomValidate, async () => {
      const newImages = await Promise.all(
        req.fields.images.map(uploadImageToCloudinary)
      );

      const images = newImages.map((imageUrl, index) => ({
        url: imageUrl,
      }));

      const data = await RoomModel.create({
        ...req.fields,
        images,
      });

      if (!data) {
        return sendResponse(res, 404, "Thêm phòng thất bại");
      }

      await HotelModel.findByIdAndUpdate(
        req.fields.id_hotel,
        { $push: { id_room: data._id } },
        { new: true }
      );

      return sendResponse(res, 200, "Thêm phòng thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm phòng");
  }
};

export const update = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return sendResponse(res, 400, "ID không hợp lệ");
  }

  const newOldImage = req.fields.oldImage
    ?.split(",")
    ?.filter((url) => url?.trim() !== "");

  const newnewOld = newOldImage?.map((img) => ({ url: img }));

  try {
    // Lấy dữ liệu hiện tại của khách sạn từ cơ sở dữ liệu
    const currentData = await RoomModel.findById(req.params.id);
    let newData = { ...req.fields }; // Sao chép dữ liệu từ request

    // Kiểm tra xem có ảnh mới được tải lên không

    const imagesArray = [];
    for (const field in req.files) {
      if (req.files.hasOwnProperty(field)) {
        const file = req.files[field];
        imagesArray.push({
          name: field,
          url: file.path,
        });
      }
    }

    const datL = req.fields.list_rooms.split(",");

    const list_rooms = datL.map((r) => ({ room: Number(r) }));

    // Cập nhật ảnh mới chỉ khi có ảnh mới được tải lên
    const newImages = await Promise.all(
      imagesArray.map(uploadImageToCloudinary)
    );

    // Tạo mảng mới chứa thông tin URL của ảnh mới và ảnh cũ
    const images = [
      ...newnewOld,
      ...newImages.map((imageUrl) => ({ url: imageUrl })),
    ];

    // Cập nhật trường ảnh trong dữ liệu mới
    newData = {
      ...newData,
      list_rooms,
      images: images,
    };

    if (req.fields.id_amenities) {
      const id_amenities = req.fields.id_amenities.split(",");
      const amenities = id_amenities.map(
        (item) => new mongoose.Types.ObjectId(item)
      );
      newData.id_amenities = amenities;
    }

    // Cập nhật dữ liệu trong cơ sở dữ liệu
    const data = await RoomModel.findByIdAndUpdate(req.params.id, newData, {
      new: true,
    });

    if (!data) {
      return sendResponse(res, 404, "Cập nhật khách sạn thất bại");
    }

    return sendResponse(res, 200, "Cập nhật phòng thành công", data);
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật phòng");
  }
};

export const search = async (req, res) => {
  try {
    const {
      quantity,
      checkin,
      checkout,
      minPrice,
      maxPrice,
      adults,
      children,
    } = req.body;
    const targetStatuses = ["Đang xử lý", "Đã xác nhận", "Đã nhận phòng"];

    const bookingConditions = {
      $or: [
        { check_in: { $lte: checkout }, check_out: { $gte: checkin } }, // Đơn booking bắt đầu trước thời gian check-out và kết thúc sau thời gian check-in
        { check_in: { $eq: checkin } }, // Đơn booking bắt đầu vào cùng thời gian check-in
        { check_out: { $eq: checkout } }, // Đơn booking kết thúc vào cùng thời gian check-out
      ],
      status: { $in: targetStatuses },
    };
    const booked = await BookingModel.find(bookingConditions);

    // Tính tổng số lượng của từng loại phòng đã đặt trong các đơn đặt phòng trùng
    const bookedRoomQuantities = {};
    booked.forEach((booking) => {
      const roomId = booking.list_room.idRoom.toString();
      if (bookedRoomQuantities[roomId]) {
        bookedRoomQuantities[roomId] += booking.list_room.quantity;
      } else {
        bookedRoomQuantities[roomId] = booking.list_room.quantity;
      }
    });

    // Lấy danh sách các phòng
    let rooms = await RoomModel.find({})
      .populate({
        path: "id_amenities", // Populate mảng Amenities
        model: "Amenities",
      })
      .populate({
        path: "id_roomType",
        model: "RoomType",
      });

    // Lọc các phòng theo số lượng người lớn và trẻ em
    if (adults && children) {
      rooms = rooms.filter(
        (room) =>
          room.id_roomType &&
          room.id_roomType.adults >= adults &&
          room.id_roomType.children >= children
      );
    }

    // Lọc các phòng theo mức giá
    if (minPrice && maxPrice) {
      rooms = rooms.filter(
        (room) =>
          room.id_roomType &&
          room.id_roomType.price >= minPrice &&
          room.id_roomType.price <= maxPrice
      );
    }

    // Lọc các phòng có sẵn dựa trên số lượng đã đặt và số lượng còn lại
    const availableRooms = rooms.filter((room) => {
      const roomId = room._id.toString();
      const bookedQuantity = bookedRoomQuantities[roomId] || 0;
      const remainingQuantity = room.quantity - bookedQuantity;
      return remainingQuantity >= quantity && room.quantity >= quantity;
    });

    return sendResponse(res, 200, "Tìm kiếm phòng thành công", availableRooms);
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500, "Lỗi server");
  }
};
export const updateStatus = async (req, res) => {
  try {
    const roomIdToFind = req.params.roomId;
    const status = req.body.status;
    const room = await RoomModel.findOneAndUpdate(
      { "list_rooms._id": roomIdToFind },
      { $set: { "list_rooms.$.status": status } },
      { new: true }
    );

    return sendResponse(res, 200, "Cập nhật trạng thái thành công", room);
  } catch (error) {
    console.log(error);
    return sendResponse(res, 500, "Lỗi server");
  }
};
