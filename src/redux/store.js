import { configureStore } from '@reduxjs/toolkit'
import saveDataReducer from './slices/userInfo'
import  saveProducts  from './slices/products'
import isLoading from './slices/isLoading'

export const store = configureStore({
  reducer: {
    userDetails: saveDataReducer,
    isLoading,
    savedProducts: saveProducts,
  },
})

export const dispatch = store.dispatch;