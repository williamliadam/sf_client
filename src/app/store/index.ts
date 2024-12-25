import dayPlanReducer from "@app/features/day-plan/slices/dayPlanSlice";
import authReducer from "@app/features/auth/authSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apiReducer, { emptySplitApi } from "@app/services/emptySliceApi";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth']
};

const rootReducer = combineReducers({
  api: apiReducer,
  auth: authReducer,
  dayPlan: dayPlanReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(emptySplitApi.middleware),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;