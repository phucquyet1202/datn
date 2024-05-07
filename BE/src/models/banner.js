import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    url: {
        type: String,
    }
}, { versionKey: false, timestamps: true })
export default mongoose.model('Banner', bannerSchema)