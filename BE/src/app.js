import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cron from "node-cron";

import {
  AmenitiesRouter,
  AuthRouter,
  BannerRouter,
  BillRouter,
  BookingRouter,
  HotelRouter,
  PaymentRouter,
  ReviewRouter,
  RoomRouter,
  RoomTypeRouter,
  VoucherRouter,
} from "./router";
import { BookingModel, PaymentModel } from "./models";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/amenities", AmenitiesRouter);
app.use("/auth", AuthRouter);
app.use("/bill", BillRouter);
app.use("/booking", BookingRouter);
app.use("/hotel", HotelRouter);
app.use("/payment", PaymentRouter);
app.use("/review", ReviewRouter);
app.use("/room", RoomRouter);
app.use("/room-type", RoomTypeRouter);
app.use("/banner", BannerRouter);
app.use("/voucher", VoucherRouter);

mongoose.connect(process.env.DB_URL);

cron.schedule("* * * * * *", async () => {
  const currentTime = new Date();
  const fifteenMinutesAgo = new Date(currentTime.getTime() - 15 * 60000);

  try {
    const overdueBookings = await BookingModel.find({
      createdAt: { $lte: fifteenMinutesAgo },
      status: "Chờ thanh toán",
    });

    await Promise.all(
      overdueBookings.map(async (booking) => {
        booking.status = "Đã hủy bỏ";

        const payment = await PaymentModel.findById(booking.id_payment);
        payment.status = "Thất bại";

        await booking.save();
        await payment.save();
      })
    );
  } catch (error) {
    console.error("Lỗi khi tìm đơn hàng đã quá hạn");
  }
});

process.on("uncaughtException", (err) => {
  console.log(err);
});

export const viteNodeApp = app;
