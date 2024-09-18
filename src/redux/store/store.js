import { configureStore } from "@reduxjs/toolkit";

import authAdminSlice from "../slice/admin/state/authAdminSlice";
import authUserSlice from "../slice/user/state/authUserSlice";

import { adminApi } from "../slice/admin/api/adminApiSlice";
import { userApi } from "../slice/user/api/userApiSlice";

export const store = configureStore({
  reducer: {
    authAdmin: authAdminSlice,
    [adminApi.reducerPath]: adminApi.reducer,
    authUser: authUserSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(adminApi.middleware)
      .concat(userApi.middleware),
});
