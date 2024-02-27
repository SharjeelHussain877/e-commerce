import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null, 
};

export const counterSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    reduxSaveData: (state, action) => {
      state.userInfo = action.payload;
    }
  },
});


export const { reduxSaveData } = counterSlice.actions;
export default counterSlice.reducer;