import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     list: [],
//     counter: 0,
//     amountPrice: 0,
//     basket: []
//   }

export const productSlice = createSlice({
  name: 'product',
  initialState : {
    list: [],
    counter: 0,
    amountPrice: 0,
  },
  reducers: {
    addToCartList: (state, {payload}) => {
      state.list.push(payload);
      state.amountPrice += payload.price;
      state.counter += 1;       
    },
    removeFromCartList: (state, action) => {
      state.amountPrice -= state.list.find(({id}) => action.payload.id === id).price 
      state.list = state.list.filter(({id}) => action.payload.id !== id);
      state.counter -= 1;
    }
  }
})

export const { addToCartList, removeFromCartList } = productSlice.actions

export default productSlice.reducer