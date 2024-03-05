import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null, 
};

export const signedUpUser = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    reduxSaveData: (state, action) => {
      state.userInfo = action.payload;
    }
  },
});


export const { reduxSaveData } = signedUpUser.actions;
export default signedUpUser.reducer;