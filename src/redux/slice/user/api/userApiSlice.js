import {
  getOtpAccessToken,
  getUserAccessToken,
} from "@/utils/accessToken/accessToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
  }),
  endpoints: (builder) => ({
    //Authentication
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
        body: { otp: data },
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
        body: data,
      }),
    }),
    userChangePassword: builder.mutation({
      query: (data) => ({
        url: "user/auth/change-password",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getOtpAccessToken("changePassword")}`,
        },
        body: data,
      }),
    }),

    //Profile
    userGetProfile: builder.query({
      query: () => ({
        url: `user/profile`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getUserAccessToken()}`,
        },
      }),
      providesTags: ["getUserProfile"],
    }),
    userProfilePicUpload: builder.mutation({
      query: (data) => ({
        url: "user/profile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getUserAccessToken()}`,
        },
        body: { profileDetails: data },
      }),
      invalidatesTags: ["getUserProfile"],
    }),

    //Payment
    createOrder: builder.mutation({
      query: (body) => ({
        url: "payment/create-order",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${body.accessToken}`,
        },
        body: JSON.stringify(body.orderDetails),
      }),
    }),
    verifyPayment: builder.mutation({
      query: (body) => ({
        url: "payment/verify-payment",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${body.accessToken}`,
        },
        body: JSON.stringify(body),
      }),
    }),

    //COntact Us
    postContactUs: builder.mutation({
      query: (data) => ({
        url: "contact-us",
        method: "POST",
        body: { ...data },
      }),
    }),

    //My Trips
    userGetTrips: builder.query({
      query: () => ({
        url: `booking/user/booking`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getUserAccessToken()}`,
        },
      }),
      providesTags: ["getUserTrips"],
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
  useUserProfilePicUploadMutation,
  useCreateOrderMutation,
  useVerifyPaymentMutation,
  usePostContactUsMutation,
  useUserGetTripsQuery,
} = userApi;
