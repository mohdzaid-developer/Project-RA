import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: JSON.parse(sessionStorage.getItem("user"))?.accessToken
    ? true
    : false,
  paramsQuery:null
};

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
    setParamsQuery(state,action) {
      state.paramsQuery = action.payload;
    },
  },
});

export const { setLogin, setLogout ,setParamsQuery} = authUserSlice.actions;
export default authUserSlice.reducer;
