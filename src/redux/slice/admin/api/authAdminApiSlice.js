import { getAdminOtpAccessToken } from "@/utils/accessToken/accessToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAdminApi = createApi({
  reducerPath: "authAdminApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => ({
        url: "admin/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    adminOtpVerify: builder.mutation({
      query: (data) => ({
        url: "admin/auth/otp",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken()}`,
        },
        body: { otp: data },
      }),
    }),
    adminResendOtp: builder.mutation({
      query: () => ({
        url: "admin/auth/otp-resend",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken("refresh")}`,
        },
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useAdminOtpVerifyMutation,
  useAdminResendOtpMutation,
} = authAdminApi;
