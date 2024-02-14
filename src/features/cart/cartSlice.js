import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {},
    deleteFromCart: (state, action) => {},
  },
})

export const {addToCart, deleteFromCart} = cartSlice.actions
export default cartSlice.reducer

