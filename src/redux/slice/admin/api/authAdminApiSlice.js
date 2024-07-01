import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAdminApi = createApi({
  reducerPath: "authAdminApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (login) => ({
        url: "admin/auth/login",
        method: "POST",
        body: login,
      }),
    }),
  }),
});

export const { useAdminLoginMutation } = authAdminApi;
