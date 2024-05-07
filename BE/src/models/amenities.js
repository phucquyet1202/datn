import mongoose from "mongoose";

const amenitiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    features: [
      {
        _id: false,
        name: {
          type: String,
          required: false,
        },

      },
    ],
    status: {
      type: String,
      enum: ['Đang áp dụng', 'Không được áp dụng'],
      default: 'Đang áp dụng'
    }
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Amenities", amenitiesSchema);
