import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import productReducer from "./product.slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
