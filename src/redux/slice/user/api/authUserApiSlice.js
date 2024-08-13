import { getOtpAccessToken, getUserAccessToken } from "@/utils/accessToken/accessToken";
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
        body: {otp:data},
      }),
    }),
    userResendOtp: builder.mutation({
      query: (data) => ({
        url: "user/auth/otp-resend",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getOtpAccessToken("refresh")}`,
        },
      }),
    }),
    userForgetPassword: builder.mutation({
      query: (data) => ({
        url: "user/auth/forget-password",
        method: "POST",
        body:data
      }),
    }),
    userChangePassword: builder.mutation({
      query: (data) => ({
        url: "user/auth/change-password",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getOtpAccessToken("changePassword")}`,
        },
        body:data
      }),
    }),
    userGetProfile: builder.query({
      query: () => ({
        url: `user/profile`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getUserAccessToken()}`,
        },
      }),
      providesTags:["getUserProfile"]
    }),

    userProfilePicUpload: builder.mutation({
      query: (data) => ({
        url: "user/profile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getUserAccessToken()}`,
        },
        body: {profileDetails:data},
      }),
      invalidatesTags:["getUserProfile"]
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserSignUpMutation,
  useUserOtpVerifyMutation,
  useUserResendOtpMutation,
  useUserForgetPasswordMutation,
  useUserChangePasswordMutation,
  useUserGetProfileQuery,
  useUserProfilePicUploadMutation
} = authUserApi;
