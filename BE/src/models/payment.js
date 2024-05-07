import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    id_booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
    url_payment: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    total_payment: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["Thành công", "Thất bại", "Chưa thanh toán"],
      default: "Chưa thanh toán",
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
