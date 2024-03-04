import { configureStore } from '@reduxjs/toolkit'
import saveDataReducer from './slices/userInfo'
import isLoading from './slices/isLoading'

export const store = configureStore({
  reducer: {
    userDetails: saveDataReducer,
    isLoading,
  },
})

export const dispatch = store.dispatch;