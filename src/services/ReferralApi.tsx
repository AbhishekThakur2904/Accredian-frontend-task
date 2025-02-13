import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://your-backend.onrender.com";

export const referralApi = createApi({
  reducerPath: "referralApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/api/referrals` }),
  endpoints: (builder) => ({
    submitReferral: builder.mutation({
      query: (referralData) => ({
        url: "/submit",
        method: "POST",
        body: referralData,
      }),
    }),
  }),
});

export const { useSubmitReferralMutation } = referralApi;
