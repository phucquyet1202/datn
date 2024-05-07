import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id_google: {
      type: String,
      unique: false,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isLockAccount: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: [
        "User",
        "Manager",
        "Admin",
        "Reservation Manager",
        "Human Resources Manager",
        "Room Manager",
        "Facilities Manager",
      ],
      default: "User",
    },
    id_information: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Information",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
