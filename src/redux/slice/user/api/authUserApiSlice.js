import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authUserApi = createApi({
  reducerPath: "authUserApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (login) => ({
        url: "admin/auth/login",
        method: "POST",
        body: login,
      }),
    }),
  }),
});

export const { useUserLoginMutation } = authUserApi;
