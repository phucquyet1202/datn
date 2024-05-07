import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  tagTypes: ["Payment"],
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getAllPayment: builder.query({
      query: (query) => {
        return {
          url: `payment`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["Payment"],
    }),
  }),
});

export const { useGetAllPaymentQuery } = paymentApi;
