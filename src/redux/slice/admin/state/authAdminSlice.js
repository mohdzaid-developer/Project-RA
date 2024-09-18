import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated:
    JSON.parse(sessionStorage.getItem("admin")) &&
    JSON.parse(sessionStorage.getItem("admin"))?.accessToken
      ? true
      : false,
};

const authAdminSlice = createSlice({
  name: "authAdmin",
  initialState,
  reducers: {
    setLogin(state) {
      state.isAuthenticated = true;
    },
    setLogout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { setLogin, setLogout } = authAdminSlice.actions;
export default authAdminSlice.reducer;
