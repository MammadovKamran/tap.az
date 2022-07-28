import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/Redux/users/userSlice";
import productSlice from "../features/Redux/products/productSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
});

export default store;
