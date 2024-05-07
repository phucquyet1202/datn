import mongoose from "mongoose";

const roomTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    adults: {
      type: Number,
      min: 1,
      required: true,
    },
    children: {
      type: Number,
      min: 1,
      required: true,
    },
    bed: {
      type: Number,
      min: 1,
      required: true,
    },
    status: {
      type: String,
      enum: ['Đang áp dụng', 'Không được áp dụng'],
      default: 'Đang áp dụng'
    }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("RoomType", roomTypeSchema);
