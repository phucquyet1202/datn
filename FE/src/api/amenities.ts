import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const amenitiesApi = createApi({
  reducerPath: "amenities",
  tagTypes: ["Amenities"],
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getAllAmenities: builder.query({
      query: () => ({
        url: "amenities",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Amenities"],
    }),
    getOneAmenities: builder.query({
      query: (id: string) => ({
        url: `amenities/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Amenities"],
    }),
    createAmenities: builder.mutation({
      query: (data) => ({
        url: `amenities`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Amenities"],
    }),
    deleteAmenities: builder.mutation({
      query: (id: string) => ({
        url: `amenities/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Amenities"],
    }),
    updateAmenities: builder.mutation({
      query: (data) => {
        const { _id, ...newData } = data;
        return {
          url: `amenities/${_id}`,
          method: "PATCH",
          body: newData,
          credentials: "include",
        };
      },
      invalidatesTags: ["Amenities"],
    }),
  }),
});

export const {
  useGetAllAmenitiesQuery,
  useGetOneAmenitiesQuery,
  useCreateAmenitiesMutation,
  useDeleteAmenitiesMutation,
  useUpdateAmenitiesMutation,
} = amenitiesApi;
