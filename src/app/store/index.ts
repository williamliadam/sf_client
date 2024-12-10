import { dayPlanSlice } from "@app/features/day-plan/slices/dayPlanSlice";
import { configureStore } from "@reduxjs/toolkit";
import { emptySplitApi } from "./emptySliceApi";

export const store = configureStore({
  reducer: {
    api: emptySplitApi.reducer,
    dayPlan: dayPlanSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;