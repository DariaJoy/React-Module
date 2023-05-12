import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/products'

const store = configureStore({
  reducer: {
    productSlice
  },
})

export default store