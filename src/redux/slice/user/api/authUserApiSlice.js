import { getOtpAccessToken } from "@/utils/accessToken/accessToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authUserApi = createApi({
  reducerPath: "authUserApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: "user/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    userSignUp: builder.mutation({
      query: (data) => ({
        url: "user/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    userOtpVerify: builder.mutation({
      query: (data) => ({
        url: "user/auth/otp",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getOtpAccessToken()}`,
        },
        body: data,
      }),
    }),
    userResendOtp: builder.mutation({
      query: (data) => ({
        url: "user/auth/otp-resend",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserSignUpMutation,
  useUserOtpVerifyMutation,
  useUserResendOtpMutation,
} = authUserApi;
