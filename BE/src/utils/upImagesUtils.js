import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadImageToCloudinary = async (image) => {
  try {
    const uploadOptions = { folder: "datn" };

    const result = await cloudinary.uploader.upload(image.url, uploadOptions);
    return result.secure_url;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
// export const deleteImageFromCloudinary = async (imageUrl) => {
//   try {
//     const publicId = getPublicIdFromImageUrl(imageUrl);
//     if (publicId) {
//       // Gọi API xóa hình ảnh từ Cloudinary
//       const result = await cloudinary.uploader.destroy(
//         publicId,
//         (error, result) => {
//           if (error) {
//             console.error(error);
//             throw new Error(
//               `Không thể xóa hình ảnh từ Cloudinary: ${publicId}`
//             );
//           }
//           return result;
//         }
//       );
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// // Hàm hỗ trợ để lấy public_id từ đường link hình ảnh
// const getPublicIdFromImageUrl = (imageUrl) => {
//   try {
//     if (imageUrl) {
//       const urlParts = imageUrl.split("/");
//       const publicIdPart = urlParts[urlParts.length - 1]?.split(".")[0];
//       return publicIdPart;
//     }
//     return null;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
