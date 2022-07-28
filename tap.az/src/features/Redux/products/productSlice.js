import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const productAdapter = createEntityAdapter({
  selectIds: (user) => user.id,
  sortComparer: (a, b) => b.addedTime.localeCompare(a.addedTime),
});

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

export const addProduct = createAsyncThunk("product/addProduct", async (product) => {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    throw new error(error);
  }
});

const productSlice = createSlice({
  name: "user",
  initialState: productAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      productAdapter.setAll(state, action.payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
  selectAll: selectAllProducts,
  selectTotal: selectTotalProducts,
  selectById: selectProductById,
} = productAdapter.getSelectors((state) => state.product);

export default productSlice.reducer;
