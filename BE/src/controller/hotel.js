import mongoose from "mongoose";

import { HotelModel } from "../models";
import { HotelValidate } from "../validate";
import { validateFormMiddleware } from "../middleware";
import { sendResponse, uploadImageToCloudinary } from "../utils";

export const getAll = async (req, res) => {
  try {
    const hotelList = await HotelModel.find().populate("id_room");

    if (!hotelList || hotelList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách khách sạn");
    }

    return sendResponse(res, 200, "Danh sách khách sạn", hotelList);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách khách sạn"
    );
  }
};

export const getOne = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    const hotel = await HotelModel.findById(req.params.id)
      .populate("id_amenities id_room")
      .populate({
        path: "id_room",
        populate: "id_roomType",
      });

    if (!hotel || hotel.length === 0) {
      return sendResponse(res, 404, "Không có thông tin khách sạn");
    }

    return sendResponse(res, 200, "Thông tin khách sạn", hotel);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy thông tin khách sạn"
    );
  }
};

export const getHotelByLocation = async (req, res) => {
  const location = req.params.location;

  try {
    if (!location) {
      return sendResponse(res, 404, "Chưa có vị trí");
    }

    const hotelByLocation = await HotelModel.find({
      city: location,
    }).populate("id_room");

    if (!hotelByLocation || hotelByLocation.length === 0) {
      return sendResponse(res, 200, "Không có thông tin khách sạn tại đây");
    }

    return sendResponse(
      res,
      200,
      "Thông tin khách sạn theo vị trí",
      hotelByLocation
    );
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra");
  }
};

export const create = async (req, res) => {
  const imagesArray = [];

  for (const field in req.files) {
    if (req.files.hasOwnProperty(field)) {
      const file = req.files[field];
      imagesArray.push({
        name: field,
        url: file.path,
      });
    }
  }

  req.fields.images = imagesArray;

  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(",");

    const amenities = id_amenities.map(
      (item) => new mongoose.Types.ObjectId(item)
    );
    req.fields.id_amenities = amenities;
  }

  try {
    validateFormMiddleware(req, res, HotelValidate, async () => {
      const newImages = await Promise.all(
        req.fields.images.map(uploadImageToCloudinary)
      );

      const images = newImages.map((imageUrl) => ({
        url: imageUrl,
      }));

      const data = await HotelModel.create({
        ...req.fields,
        images,
      });

      if (!data) {
        return sendResponse(res, 404, "Thêm khách sạn thất bại");
      }

      return sendResponse(res, 200, "Thêm khách sạn thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm khách sạn");
  }
};

export const update = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return sendResponse(res, 400, "ID không hợp lệ");
  }

  const newOldImage = req.fields.oldImage.split(',').filter(url => url.trim() !== '');

  const newnewOld = newOldImage.map((img) => ({ url: img }));

  try {
    // Lấy dữ liệu hiện tại của khách sạn từ cơ sở dữ liệu
    const currentData = await HotelModel.findById(req.params.id);
    let newData = { ...req.fields }; // Sao chép dữ liệu từ request

    // Kiểm tra xem có ảnh mới được tải lên không
    const imagesArray = [];
    for (const field in req.files) {
      if (req.files.hasOwnProperty(field)) {
        const file = req.files[field];
        imagesArray.push({
          name: field,
          url: file.path,
        });
      }
    }

    // Cập nhật ảnh mới chỉ khi có ảnh mới được tải lên
    const newImages = await Promise.all(imagesArray.map(uploadImageToCloudinary));

    // Tạo mảng mới chứa thông tin URL của ảnh mới và ảnh cũ
    const images = [...newnewOld, ...newImages.map(imageUrl => ({ url: imageUrl }))];

    // Cập nhật trường ảnh trong dữ liệu mới
    newData = {
      ...newData,
      images: images
    };

    if (req.fields.id_amenities) {
      const id_amenities = req.fields.id_amenities.split(",");
      const amenities = id_amenities.map((item) => new mongoose.Types.ObjectId(item));
      newData.id_amenities = amenities;
    }

    // Cập nhật dữ liệu trong cơ sở dữ liệu
    const data = await HotelModel.findByIdAndUpdate(req.params.id, newData, {
      new: true,
    });

    if (!data) {
      return sendResponse(res, 404, "Cập nhật khách sạn thất bại");
    }

    return sendResponse(res, 200, "Cập nhật phòng thành công", data);
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật phòng");
  }
};
