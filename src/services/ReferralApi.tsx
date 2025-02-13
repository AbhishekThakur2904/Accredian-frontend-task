import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const referralApi = createApi({
  reducerPath: "referralApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/referrals" }),
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
