import { configureStore } from "@reduxjs/toolkit";

import {
  amenitiesApi,
  authApi,
  bookingApi,
  hotelApi,
  provincesApi,
  roomApi,
  roomTypeApi,
  userApi,
  reviewApi,
  voucherApi,
} from "../api";
import { paymentApi } from "../api/payment";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [hotelApi.reducerPath]: hotelApi.reducer,
    [amenitiesApi.reducerPath]: amenitiesApi.reducer,
    [roomTypeApi.reducerPath]: roomTypeApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [provincesApi.reducerPath]: provincesApi.reducer,
    [bookingApi.reducerPath]: bookingApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [voucherApi.reducerPath]: voucherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(hotelApi.middleware)
      .concat(amenitiesApi.middleware)
      .concat(roomTypeApi.middleware)
      .concat(roomApi.middleware)
      .concat(provincesApi.middleware)
      .concat(bookingApi.middleware)
      .concat(paymentApi.middleware)
      .concat(reviewApi.middleware)
      .concat(voucherApi.middleware),
});
