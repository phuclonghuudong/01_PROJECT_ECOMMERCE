import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  card: "",
  isLoading: false,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchRedux: (state, action) => {
      state.search = action.payload;
    },
    addOrder: (state, action) => {
      state.card = action.payload;
    },
  },
});

export const { searchRedux } = ProductSlice.actions;

export default ProductSlice.reducer;
