import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    images: [
      {
        _id: false,
        url: {
          type: String,
          required: true,
        },
      },
    ],
    quantity: {
      type: Number,
      required: true,
    },
    list_rooms: [
      {
        room: {
          type: Number,
          required: true,
        },
        status: {
          type: Boolean,
          default: false,
        }
      }
    ],
    status: {
      type: String,
      default: "Có sẵn",
      enum: ["Có sẵn", "Đã hết phòng"],
    },
    description: {
      type: String,
      required: true,
    },
    id_amenities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenities",
      },
    ],
    id_hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    id_roomType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomType",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Room", roomSchema);
