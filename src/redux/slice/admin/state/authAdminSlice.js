import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

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
