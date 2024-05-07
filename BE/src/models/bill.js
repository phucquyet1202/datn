import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    id_booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking"
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Bill", billSchema);
