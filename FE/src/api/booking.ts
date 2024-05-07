import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  tagTypes: ["Booking"],
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: (query) => {
        return {
          url: `booking?${query}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["Booking"],
    }),
    getOneBooking: builder.query({
      query: (id: string) => ({
        url: `booking/get-one/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Booking"],
    }),
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/booking",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Booking"],
    }),
    updateInfoBooking: builder.mutation({
      query: (data) => {
        const { _id, ...newData } = data;

        return {
          url: `/booking/${_id}`,
          method: "PUT",
          body: newData,
          credentials: "include",
        };
      },
      invalidatesTags: ["Booking"],
    }),
    updateBooking: builder.mutation({
      query: (data) => {
        const { _id, ...newData } = data;

        return {
          url: `/booking/${_id}`,
          method: "PATCH",
          body: newData,
          credentials: "include",
        };
      },
      invalidatesTags: ["Booking"],
    }),
    vnPayPayment: builder.mutation({
      query: (data) => ({
        url: "/payment/vnPay",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Booking"],
    }),
    zaloPayPayment: builder.mutation({
      query: (data) => ({
        url: "/payment/create-order-zaloPay",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Booking"],
    }),
    checkStatusZaloPay: builder.mutation({
      query: (code) => ({
        url: `payment/check-status-zaloPay/${code}`,
        method: "POST",
      }),
      invalidatesTags: ["Booking"],
    }),
    getBookingByUser: builder.query({
      query: () => ({
        url: "/booking/booking-user",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Booking"],
    }),
    getTotalStatus: builder.query({
      query: () => ({
        url: "/booking/getTotalStatus",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Booking"],
    }),
    calculateTotalAmountDay: builder.mutation({
      query: (data) => ({
        url: "/booking/calculateTotalAmountDay",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Booking"],
    }),
    calculateTotalAmountMonth: builder.mutation({
      query: (data) => ({
        url: "/booking/calculateTotalAmountMonth",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
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
} = bookingApi;
