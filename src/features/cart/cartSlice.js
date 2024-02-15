import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({
        id: nanoid(),
        title: action.payload.title,
        price: action.payload.price,
        description : action.payload.description,
        image: action.payload.image, 
      });
    },
    deleteFromCart: (state, action) => {
      state.cart.splice(action.payload, 1)
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
