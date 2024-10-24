import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  filter: "",
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchRedux: (state, action) => {
      state.search = action.payload;
    },
    filterTypeRedux: (state, action) => {
      state.filter = action.payload;
    },
    filterSizeRedux: (state, action) => {
      state.filter = action.payload;
    },
    filterColorRedux: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { searchRedux, filterTypeRedux, filterSizeRedux, filterColorRedux } = ProductSlice.actions;

export default ProductSlice.reducer;
