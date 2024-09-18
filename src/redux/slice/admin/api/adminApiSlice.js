import {
  getAdminAccessToken,
  getAdminOtpAccessToken,
} from "@/utils/accessToken/accessToken";
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
      query: ({ selectedPackage, selectedPlan, destination, id, status,pageNum,pageSize }) => ({
        url: `booking?plan=${selectedPlan}&package=${selectedPackage}&destination=${destination}&bookingId=${
          id ?? ""
        }&status=${status ?? ""}&pageNum=${pageNum}&pageSize=${pageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken()}`,
        },
      }),
      providesTags: ["getAllListOfTrips"],
    }),

    createCustomOrder: builder.mutation({
      query: (data) => ({
        url: "/create-custom-order",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${getAdminAccessToken()}`,
        },
        body: { ...data },
      }),
      invalidatesTags: ["getAllListOfTrips"],
    }),

    adminUpdateTripStatus: builder.mutation({
      query: ({ status, id }) => ({
        url: `booking?bookingStatus=${status}&bookingId=${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${getAdminAccessToken()}`,
        },
      }),
      invalidatesTags: ["getAllListOfTrips"],
    }),

    adminGetAllPayments: builder.query({
      query: ({pageNum,pageSize}) => ({
        url: `payment?pageNum=${pageNum}&pageSize=${pageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken()}`,
        },
      }),
    }),
    adminGetAllUsers: builder.query({
      query: ({ isBooked,pageNum,pageSize }) => ({
        url: `admin/management/user?isBooked=${isBooked}&pageNum=${pageNum}&pageSize=${pageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminOtpAccessToken()}`,
        },
      }),
    }),
    adminGetAllQueries: builder.query({
      query: ({pageNum,pageSize}) => ({
        url: `contact-us?pageNum=${pageNum}&pageSize=${pageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminAccessToken()}`,
        },
      }),
    }),
    adminGetAllNewsLetters: builder.query({
      query: ({pageNum,pageSize}) => ({
        url: `news-letter?pageNum=${pageNum}&pageSize=${pageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getAdminAccessToken()}`,
        },
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useAdminOtpVerifyMutation,
  useAdminResendOtpMutation,
  useCreateCustomOrderMutation,
  useAdminGetAllBookingQuery,
  useAdminGetAllPaymentsQuery,
  useAdminGetAllUsersQuery,
  useAdminGetAllQueriesQuery,
  useAdminUpdateTripStatusMutation,
  useAdminGetAllNewsLettersQuery,
} = adminApi;
