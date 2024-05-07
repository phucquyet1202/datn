// Amenities API
import {
  amenitiesApi,
  useGetAllAmenitiesQuery,
  useGetOneAmenitiesQuery,
  useCreateAmenitiesMutation,
  useUpdateAmenitiesMutation,
  useDeleteAmenitiesMutation,
} from "./amenities";

// Auth API
import {
  authApi,
  useLoginAccountMutation,
  useRegisterAccountMutation,
  useInfoAccountQuery,
  useLogoutAccountMutation,
  useGetCodeChangePasswordMutation,
  useCheckCodeChangePasswordMutation,
  useChangePasswordMutation,
  useCheckMailCodeMutation,
} from "./auth";

// Booking API
import {
  bookingApi,
  useGetAllBookingQuery,
  useGetOneBookingQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useVnPayPaymentMutation,
  useZaloPayPaymentMutation,
  useCheckStatusZaloPayMutation,
  useGetBookingByUserQuery,
  useCalculateTotalAmountDayMutation,
  useCalculateTotalAmountMonthMutation,
  useGetTotalStatusQuery,
  useUpdateInfoBookingMutation,
} from "./booking";

// Hotel API
import {
  hotelApi,
  useGetAllHotelQuery,
  useGetOneHotelQuery,
  useGetHotelByCityQuery,
  useCreateHotelMutation,
  useUpdateHotelMutation,
} from "./hotel";

// Provinces API
import { provincesApi, useGetAllProvincesQuery } from "./provinces";

// Voucher API
import { useGetVoucherByCodeMutation, voucherApi } from "./voucher";

// Room API
import {
  roomApi,
  useGetAllRoomQuery,
  useGetOneRoomQuery,
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useSearchRoomMutation,
  useUpdateStatusRoomNumberMutation,
} from "./room";

// RoomType API
import {
  roomTypeApi,
  useGetAllRoomTypeQuery,
  useGetOneRoomTypeQuery,
  useCreateRoomTypeMutation,
  useUpdateRoomTypeMutation,
  useDeleteRoomTypeMutation,
} from "./roomType";

// User API
import {
  userApi,
  useGetAllUserQuery,
  useGetOneUserMutation,
  useLockUserMutation,
  useChangeRoleUserMutation,
} from "./user";

// review api
import {
  useGetAllReviewQuery,
  useGetOneReviewQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  reviewApi,
} from "./review";

export {
  amenitiesApi,
  useGetAllAmenitiesQuery,
  useGetOneAmenitiesQuery,
  useCreateAmenitiesMutation,
  useUpdateAmenitiesMutation,
  useDeleteAmenitiesMutation,
  authApi,
  useLoginAccountMutation,
  useRegisterAccountMutation,
  useInfoAccountQuery,
  useLogoutAccountMutation,
  useGetCodeChangePasswordMutation,
  useCheckCodeChangePasswordMutation,
  useChangePasswordMutation,
  useCheckMailCodeMutation,
  voucherApi,
  useGetVoucherByCodeMutation,
  bookingApi,
  useGetAllBookingQuery,
  useGetOneBookingQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useVnPayPaymentMutation,
  useZaloPayPaymentMutation,
  useCheckStatusZaloPayMutation,
  useGetBookingByUserQuery,
  useCalculateTotalAmountDayMutation,
  useCalculateTotalAmountMonthMutation,
  useGetTotalStatusQuery,
  hotelApi,
  useGetAllHotelQuery,
  useGetOneHotelQuery,
  useGetHotelByCityQuery,
  useCreateHotelMutation,
  useUpdateHotelMutation,
  provincesApi,
  useGetAllProvincesQuery,
  roomApi,
  useGetAllRoomQuery,
  useGetOneRoomQuery,
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useUpdateStatusRoomNumberMutation,
  roomTypeApi,
  useGetAllRoomTypeQuery,
  useGetOneRoomTypeQuery,
  useCreateRoomTypeMutation,
  useUpdateRoomTypeMutation,
  useDeleteRoomTypeMutation,
  userApi,
  useGetAllUserQuery,
  useGetOneUserMutation,
  useLockUserMutation,
  useChangeRoleUserMutation,
  reviewApi,
  useUpdateInfoBookingMutation,
  useGetAllReviewQuery,
  useGetOneReviewQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useSearchRoomMutation,
};
