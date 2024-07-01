import { configureStore } from "@reduxjs/toolkit";

import authAdminSlice from "../slice/admin/state/authAdminSlice";
import authUserSlice from "../slice/user/state/authUserSlice";

import { authAdminApi } from "../slice/admin/api/authAdminApiSlice";
import { authUserApi } from "../slice/user/api/authUserApiSlice";

export const store = configureStore({
  reducer: {
    authAdmin: authAdminSlice,
    [authAdminApi.reducerPath]: authAdminApi.reducer,
    authUser: authUserSlice,
    [authUserApi.reducerPath]: authUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authAdminApi.middleware)
      .concat(authUserApi.middleware),
});
