import { configureStore } from "@reduxjs/toolkit";
import { departmentApi } from "./services/departmentApi";

export const store = configureStore({
  reducer: {
    [departmentApi.reducerPath]: departmentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(departmentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
