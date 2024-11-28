import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.18.108:1999/api/' }),

  endpoints: (builder) => ({

    userSignup: builder.mutation({

      query: (query) => ({
        url: '/users/signup',
        method: 'POST',
        body: query
      })
    }),

    userLogin: builder.mutation({

      query: (query) => ({
        url: '/users/login',
        method: 'POST',
        body: query
      })
    }),

  })
})

export const { useUserSignupMutation, useUserLoginMutation } = authApi;