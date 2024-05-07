import qs from "qs";
import axios from "axios";
import crypto from "crypto";
import moment from "moment";
import dotenv from "dotenv";

import { PaymentValidate } from "../validate";
import { validateMiddleware } from "../middleware";
import { BookingModel, PaymentModel, RoomModel } from "../models";
import {
  createOrder,
  getStatusOrder,
  sendResponse,
  sortObject,
} from "../utils";

dotenv.config();

export const vnPayPayment = (req, res) => {
  const { amount, bookingId, total_payment } = req.body;

  try {
    validateMiddleware(req, res, PaymentValidate, async () => {
      process.env.TZ = "Asia/Ho_Chi_Minh";

      const date = new Date();
      const createDate = moment(date).format("YYYYMMDDHHmmss");

      const ipAddr =
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

      const data = {
        id_booking: bookingId,
        amount,
        total_payment,
      };

      const payment = await PaymentModel.create(data);

      await BookingModel.findByIdAndUpdate(
        { _id: bookingId },
        { id_payment: payment._id },
        { new: true }
      );

      let vnp_Params = {};
      vnp_Params["vnp_Version"] = "2.1.0";
      vnp_Params["vnp_Command"] = "pay";
      vnp_Params["vnp_TmnCode"] = process.env.VNP_TMNCODE;
      vnp_Params["vnp_Locale"] = "vn";
      vnp_Params["vnp_CurrCode"] = "VND";
      vnp_Params["vnp_TxnRef"] = payment._id;
      vnp_Params["vnp_OrderInfo"] = "Thanh toan hoa don " + bookingId;
      vnp_Params["vnp_OrderType"] = "other";
      vnp_Params["vnp_Amount"] = amount * 100;
      vnp_Params["vnp_ReturnUrl"] = process.env.VNP_RETURN_URL;
      vnp_Params["vnp_IpAddr"] = ipAddr;
      vnp_Params["vnp_CreateDate"] = createDate;
      vnp_Params = sortObject(vnp_Params);

      const signData = qs.stringify(vnp_Params, { encode: false });
      const hmac = crypto.createHmac("sha512", process.env.VNP_HASHSECRET);
      const signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");

      vnp_Params["vnp_SecureHash"] = signed;

      const url = `${process.env.VNP_URL}?${qs.stringify(vnp_Params, {
        encode: false,
      })}`;

      await PaymentModel.findByIdAndUpdate(
        { _id: payment._id },
        { url_payment: url },
        { new: true }
      );

      return sendResponse(res, 200, "Thanh toán VN Pay", url);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const vnPayPaymentReturn = async (req, res) => {
  let vnp_Params = req.query;
  const secureHash = vnp_Params["vnp_SecureHash"];

  delete vnp_Params["vnp_SecureHash"];
  delete vnp_Params["vnp_SecureHashType"];

  try {
    vnp_Params = sortObject(vnp_Params);

    const signData = qs.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac("sha512", process.env.VNP_HASHSECRET);
    const signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");

    if (secureHash !== signed) {
      res.redirect(`${process.env.PUBLIC_URL}/error-payment-signed`);
    }

    const idPayment = vnp_Params["vnp_TxnRef"];
    const vnp_ResponseCode = vnp_Params["vnp_ResponseCode"];

    if (vnp_ResponseCode !== "00") {
      console.log(idPayment);

      const payment = await PaymentModel.findByIdAndUpdate(
        { _id: idPayment },
        { status: "Thất bại", url_payment: "" },
        { new: true }
      );

      await BookingModel.findByIdAndUpdate(
        { _id: payment.id_booking },
        { status: "Đã hủy bỏ" },
        { new: true }
      );

      return res.redirect(`${process.env.PUBLIC_URL}/auth/booking`);
    }

    const payment = await PaymentModel.findByIdAndUpdate(
      { _id: idPayment },
      { status: "Thành công", code: idPayment, url_payment: null },
      { new: true }
    );

    await BookingModel.findByIdAndUpdate(
      { _id: payment.id_booking },
      { status: "Đang xử lý", payment_status: true },
      { new: true }
    );

    return res.redirect(`${process.env.PUBLIC_URL}/auth/booking`);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const createOrderZaloPay = async (req, res) => {
  const { amount, bookingId } = req.body;

  try {
    validateMiddleware(req, res, PaymentValidate, async () => {
      const date = new Date();
      const apptransid = `${moment(date).format("YYMMDD")}_${Date.now()}`;

      let order = {
        amount: amount,
        description: "Thanh toán hóa đơn " + bookingId,
        appid: process.env.ZALOPAY_APPID,
        apptime: Date.now(),
        apptransid,
        appuser: "TranVanLuong",
        bankcode: "zalopayapp",
        embeddata: "embeddata",
        item: "item",
      };

      const paymentData = {
        id_booking: bookingId,
        amount,
        code: apptransid,
      };

      const payment = await PaymentModel.create(paymentData);

      await BookingModel.findByIdAndUpdate(
        { _id: bookingId },
        { id_payment: payment._id },
        { new: true }
      );

      const mac = createOrder(order);
      order.mac = mac;

      const { data } = await axios.post(
        process.env.ZALOPAY_CREATE_ORDER_URL,
        null,
        {
          params: order,
        }
      );

      if (data.returncode !== 1) {
        return res.redirect(`${process.env.PUBLIC_URL}/error-create-payment`);
      }

      return sendResponse(res, 200, "Thanh toán Zalo Pay", data.orderurl);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const checkStatusZaloPay = async (req, res) => {
  const { code } = req.params;

  try {
    let order = {
      appid: process.env.ZALOPAY_APPID,
      apptransid: code,
    };

    const mac = getStatusOrder(order);
    order.mac = mac;

    const { data } = await axios.post(
      process.env.ZALOPAY_CHECK_STATUS_URL,
      null,
      {
        params: order,
      }
    );

    if (data.returncode !== 1) {
      const payment = await PaymentModel.findOneAndUpdate(
        { code: code },
        { status: "Thất bại" },
        { new: true }
      );

      const booking = await BookingModel.findByIdAndUpdate(
        { _id: payment.id_booking },
        { status: "Đã hủy bỏ" },
        { new: true }
      );

      await Promise.all(
        booking.list_room.map(async (item) => {
          const room = await RoomModel.findById(item.idRoom);

          if (room) {
            room.quantity += item.quantity;

            await room.save();
          }
        })
      );

      return sendResponse(res, 200, "Giao dịch thất bại");
    }

    const payment = await PaymentModel.findOneAndUpdate(
      { code },
      { status: "Thành công" },
      { new: true }
    );

    await BookingModel.findByIdAndUpdate(
      { _id: payment.id_booking },
      { status: "Đang xử lý" },
      { new: true }
    );

    return sendResponse(res, 200, "Giao dịch thành công");
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const getAll = async (req, res) => {
  try {
    const data = await PaymentModel.find().populate("id_booking");
    if (data.length < 0) {
      return sendResponse(res, 404, "Không lấy được dữ liệu");
    }
    return sendResponse(res, 200, "Lấy dữ liệu thành công", data);
  } catch (error) {
    return sendResponse(res, 500, "Lỗi server");
  }
};
