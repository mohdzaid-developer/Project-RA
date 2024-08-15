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

    adminGetAllBooking: builder.query({
      query: ({ selectedPackage, selectedPlan, destination, id }) => ({
        url: `payment/booking?plan=${selectedPlan}&package=${selectedPackage}&destination=${destination}&id=${
          id ?? ""
        }`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken()}`,
        },
      }),
    }),
    adminGetAllPayments: builder.query({
      query: () => ({
        url: `payment`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken()}`,
        },
      }),
    }),
    adminGetAllUsers: builder.query({
      query: ({isBooked}) => ({
        url: `admin/management/user?isBooked=${isBooked}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken()}`,
        },
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useAdminOtpVerifyMutation,
  useAdminResendOtpMutation,

  //booking
  useAdminGetAllBookingQuery,
  useAdminGetAllPaymentsQuery,
  useAdminGetAllUsersQuery
} = authAdminApi;
