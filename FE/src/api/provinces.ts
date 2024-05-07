import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const provincesApi = createApi({
  reducerPath: "provincesApi",
  tagTypes: ["Provinces"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vapi.vnappmob.com/api/province/",
  }),
  endpoints: (builder) => ({
    getAllProvinces: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Provinces"],
    }),
  }),
});

export const { useGetAllProvincesQuery } = provincesApi;
