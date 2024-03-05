import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const saveProducts = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    reduxAddProduct: (state, action) => {
      if (state) return [...action.payload];
    },
  },
});

export const { reduxAddProduct } = saveProducts.actions;
export default saveProducts.reducer;
