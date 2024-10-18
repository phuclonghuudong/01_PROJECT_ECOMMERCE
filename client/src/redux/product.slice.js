import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  isLoading: false,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchRedux: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchRedux } = ProductSlice.actions;

export default ProductSlice.reducer;
