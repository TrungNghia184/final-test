import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slices/globalSlices'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})