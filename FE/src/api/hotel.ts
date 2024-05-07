import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const hotelApi = createApi({
  reducerPath: "hotel",
  tagTypes: ["Hotel"],
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getAllHotel: builder.query({
      query: () => ({
        url: "hotel",
        method: "GET",
      }),
      providesTags: ["Hotel"],
    }),
    getOneHotel: builder.query({
      query: (id: string | undefined) => `/hotel/${id}`,
      providesTags: ["Hotel"],
    }),
    getHotelByCity: builder.query({
      query: (location) => ({
        url: `hotel/hotel-by-city/${location}`,
        method: "GET",
      }),
      providesTags: ["Hotel"],
    }),
    createHotel: builder.mutation({
      query: (data) => {
        const formData = new FormData();

        Object.keys(data).forEach((key) => {
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
          url: `hotel`,
          method: "POST",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["Hotel"],
    }),
    updateHotel: builder.mutation({
      query: (data) => {
        const { _id, ...newData } = data;

        const oldImage = newData.images.map((image: any) => image.url);

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

        formData.append("oldImage", oldImage);

        return {
          url: `hotel/${_id}`,
          method: "PATCH",
          body: formData,
          credentials: "include",
        };
      },
      invalidatesTags: ["Hotel"],
    }),
  }),
});

export const {
  useGetAllHotelQuery,
  useGetOneHotelQuery,
  useGetHotelByCityQuery,
  useCreateHotelMutation,
  useUpdateHotelMutation,
} = hotelApi;
