import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const roomTypeApi = createApi({
  reducerPath: "roomTypeApi",
  tagTypes: ["RoomType"],
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getAllRoomType: builder.query({
      query: () => ({
        url: "room-type",
        method: "GET",
      }),
      providesTags: ["RoomType"],
    }),
    getOneRoomType: builder.query({
      query: (id: string) => ({
        url: `room-type/${id}`,
        method: "GET",
      }),
      providesTags: ["RoomType"],
    }),
    createRoomType: builder.mutation({
      query: (data) => ({
        url: `room-type`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["RoomType"],
    }),
    deleteRoomType: builder.mutation({
      query: (id: string) => ({
        url: `room-type/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["RoomType"],
    }),
    updateRoomType: builder.mutation({
      query: (data) => {
        const { _id, ...newData } = data;
        return {
          url: `room-type/${_id}`,
          method: "PATCH",
          body: newData,
          credentials: "include",
        };
      },
      invalidatesTags: ["RoomType"],
    }),
  }),
});

export const {
  useGetAllRoomTypeQuery,
  useGetOneRoomTypeQuery,
  useCreateRoomTypeMutation,
  useUpdateRoomTypeMutation,
  useDeleteRoomTypeMutation,
} = roomTypeApi;
