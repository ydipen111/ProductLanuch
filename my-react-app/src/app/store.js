import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/Admin/userSlice";
import { authApi } from "../features/Admin/authApi";
import { productApi } from "../features/product/prouctApi";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware,
    productApi.middleware
  ])
})