import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      console.log('Removing from cart:', productId);
      const existingItem = state.cartItems.find(
        (product) => product.id === productId
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== productId
          );
        }
      }
      console.log('Updated cart:', state.cartItems);
    },
  },
});
export const { addToCart, removeFromCart } = counterSlice.actions;

export default counterSlice.reducer;
