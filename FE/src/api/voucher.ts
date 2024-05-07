import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const voucherApi = createApi({
  reducerPath: "voucherApi",
  tagTypes: ["Voucher"],
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getVoucherByCode: builder.mutation({
      query: (data) => ({
        url: `voucher/get-by-code`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Voucher"],
    }),
    getAll: builder.query({
      query: () => ({
        url: `voucher`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Voucher"],
    }),
    createVoucher: builder.mutation({
      query: (data) => ({
        url: `voucher`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Voucher"],
    }),
  }),
});

export const {
  useGetVoucherByCodeMutation,
  useGetAllQuery,
  useCreateVoucherMutation,
} = voucherApi;
