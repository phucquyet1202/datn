import mongoose from "mongoose";

const informationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: Number,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    birthday: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Information", informationSchema);
