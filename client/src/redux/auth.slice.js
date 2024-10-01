import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state.login = action.payload;
    },
    logoutRedux: (state) => {
      state.login = "";
    },
  },
});

export const { loginRedux, logoutRedux } = authSlice.actions;

export default authSlice.reducer;
