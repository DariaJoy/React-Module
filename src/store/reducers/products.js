import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    list: [],
    counter: 0,
    amountPrice: 0
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
      state.amountPrice += action.payload.price;
      state.counter += 1; 
    },
    remove: (state, action) => {
      state.amountPrice -= state.list.find(({id}) => action.payload.id === id).price 
      state.list = state.list.filter(({id}) => action.payload.id !== id);
      state.counter -= 1;
    }
  }
})

export const { add, remove } = productSlice.actions

export default productSlice.reducer