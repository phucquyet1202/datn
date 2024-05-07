import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  tagTypes: ["Review"],
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getAllReview: builder.query({
      query: () => ({
        url: "review",
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    getOneReview: builder.query({
      query: (id: string) => ({
        url: `review/${id}`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `review`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Review"],
    }),
    updateReview: builder.mutation({
      query: (data) => {
        const { _id, ...newData } = data;

        const formData = new FormData();

        Object.keys(newData).forEach((key) => {
          if (key === "images" && Array.isArray(data[key])) {
            // eslint-disable-next-line
            data[key].forEach((file: any, index: number) => {
              formData.append(`images[${index}]`, file.originFileObj);
            });
          } else {
            formData.append(key, data[key]);
          }
        });

        return {
          url: `review/${_id}`,
          method: "PATCH",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["Review"],
    }),
    deleteReview: builder.mutation({
      query: (id: string) => ({
        url: `review/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const {
  useGetAllReviewQuery,
  useGetOneReviewQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
