import { configureStore } from "@reduxjs/toolkit";
import { referralApi } from "../services/ReferralApi";

export const store = configureStore({
  reducer: {
    [referralApi.reducerPath]: referralApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(referralApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
