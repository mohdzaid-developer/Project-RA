import { getAdminAccessToken, getAdminOtpAccessToken } from "@/utils/accessToken/accessToken";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
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
        url: `booking?plan=${selectedPlan}&package=${selectedPackage}&destination=${destination}&id=${
          id ?? ""
        }`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken()}`,
        },
      }),
      providesTags:["getAllListOfTrips"]
    }),

    adminUpdateTripStatus: builder.mutation({
      query: ({status,id}) => ({
        url: `booking?bookingStatus=${status}&id=${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${getAdminAccessToken()}`,
        },
      }),
      invalidatesTags:["getAllListOfTrips"]
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
      query: ({ isBooked }) => ({
        url: `admin/management/user?isBooked=${isBooked}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken()}`,
        },
      }),
    }),
    adminGetAllQueries: builder.query({
      query: () => ({
        url: `contact-us`,
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
  useAdminGetAllBookingQuery,
  useAdminGetAllPaymentsQuery,
  useAdminGetAllUsersQuery,
  useAdminGetAllQueriesQuery,
  useAdminUpdateTripStatusMutation
} = adminApi;
