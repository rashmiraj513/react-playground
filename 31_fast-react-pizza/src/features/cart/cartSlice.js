import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzaCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newPizzaItem
      state.pizzaCart.push(action.payload);
    },
    removeItem(state, action) {
      // payload = pizzaId
      state.pizzaCart = state.pizzaCart.filter(
        (item) => item.pizzaId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.pizzaCart.find(
        (item) => item.pizzaId === action.payload
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.pizzaCart.find(
        (item) => item.pizzaId === action.payload
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        cartSlice.caseReducers.removeItem(state, action);
      }
    },
    clearCart(state) {
      state.pizzaCart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.pizzaCart;

export const getTotalCartQuantity = (state) =>
  state.cart.pizzaCart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.pizzaCart.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.pizzaCart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
