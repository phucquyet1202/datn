import { validateFormMiddleware } from "../middleware";
import { BannerModel } from "../models";
import { sendResponse, uploadImageToCloudinary } from "../utils";
// import { deleteImageFromCloudinary } from "../utils/upImagesUtils";
import { BannerValidate } from "../validate";
export const create = async (req, res) => {
    try {
        const banner = {
            name: req.files.url.name,
            url: req.files.url.path
        }
        req.fields.name = banner.name,
            req.fields.url = banner.url
        validateFormMiddleware(req, res, BannerValidate, async () => {
            const newImages = await uploadImageToCloudinary(banner);

            req.fields.url = newImages
            const data = await BannerModel.create(req.fields)
            if (data) {
                return sendResponse(res, 200, 'Thêm banner thành công', data)
            }
            return sendResponse(res, 404, 'Thêm banner không thành công')

        })
    } catch (error) {
        console.log(error);
        return sendResponse(res, 500, 'Lỗi server')
    }
}

export const update = async (req, res) => {
    try {
        const bannerId = req.params.id;
        // Kiểm tra xem banner có tồn tại trong cơ sở dữ liệu không
        const existingBanner = await BannerModel.findById(bannerId);
        if (!existingBanner) {
            return sendResponse(res, 404, 'Không tìm thấy banner');
        }
        // Nếu có file mới được tải lên, thực hiện xóa hình ảnh cũ trên Cloudinary
        if (req.files && req.files.url) {
            // await deleteImageFromCloudinary(existingBanner.url);

            // Tải lên hình ảnh mới và cập nhật đường link trong cơ sở dữ liệu
            const newImageUrl = await uploadImageToCloudinary({
                name: req.files.url.name,
                url: req.files.url.path
            });

            existingBanner.url = newImageUrl;
            existingBanner.name = req.files.url.name
        }
        // Lưu các thay đổi vào cơ sở dữ liệu
        const updatedBanner = await existingBanner.save();

        return sendResponse(res, 200, 'Cập nhật banner thành công', updatedBanner);
    } catch (error) {
        console.log(error);
        return sendResponse(res, 500, 'Lỗi server')
    }
}
export const getAll = async (req, res) => {
    try {
        const data = await BannerModel.find()
        if (data.length > 0) {
            return sendResponse(res, 200, 'Lấy dữ liệu thành công', data)
        }
        return sendResponse(res, 200, 'Lấy dữ liệu không thành công')

    } catch (error) {
        console.log(error);
        return sendResponse(res, 500, 'Lỗi server')
    }
}
export const getOne = async (req, res) => {
    try {
        const data = await BannerModel.findById(req.params.id)
        if (data) {
            return sendResponse(res, 200, 'Lấy dữ liệu thành công', data)
        }
        return sendResponse(res, 200, 'Lấy dữ liệu không thành công')

    } catch (error) {
        console.log(error);
        return sendResponse(res, 500, 'Lỗi server')
    }
}
export const dele = async (req, res) => {
    try {
        const data = await BannerModel.findById(req.params.id)
        await deleteImageFromCloudinary(data.url);
        await BannerModel.findByIdAndDelete(data._id)
        return sendResponse(res, 200, 'Xóa banner thành công', data)
    } catch (error) {
        console.log(error);
        return sendResponse(res, 500, 'Lỗi server')
    }
}