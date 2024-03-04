import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const isLoading = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    reduxCheckState: (state) => {
      return !state;
    }
  },
});


export const { reduxCheckState } = isLoading.actions;
export default isLoading.reducer;