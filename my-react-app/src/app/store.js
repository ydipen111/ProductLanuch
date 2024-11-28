import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/Admin/userSlice";
import { authApi } from "../features/Admin/authApi";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware
  ])
})