import { configureStore } from '@reduxjs/toolkit'
import saveDataReducer from './slices/userInfo'
export const store = configureStore({
  reducer: {
    userDetails: saveDataReducer
  },
})

export const dispatch = store.dispatch;