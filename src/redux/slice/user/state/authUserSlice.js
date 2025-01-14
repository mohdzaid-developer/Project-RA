import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

const authUserSlice = createSlice({
  name: "authUser",
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

export const { setLogin, setLogout } = authUserSlice.actions;
export default authUserSlice.reducer;
