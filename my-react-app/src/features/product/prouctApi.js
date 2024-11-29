import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../Data/port";

export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.148:1999/api'
  }),

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      }),
      // providesTags: 'Product'
    }),

  })
})

export const { useGetProductsQuery } = productApi;