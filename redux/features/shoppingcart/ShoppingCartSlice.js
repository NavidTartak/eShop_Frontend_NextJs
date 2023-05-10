import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  items: [],
  totalCount: 0,
  totalAmount: 0,
};
const upToDateCart = (state) => {
  state.totalCount = 0;
  state.totalAmount = 0;
  state.items.map((item) => {
    state.totalCount += item.count;
    state.totalAmount +=
      item.priceWithDiscount > 0
        ? item.count * item.priceWithDiscount
        : item.count * item.price;
  });
  return state;
};
export const ShoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push({ ...action.payload, count: 1 });
      return upToDateCart(state);
    },
    increaseItem: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: (item.count += 1) };
        }
      });
      return upToDateCart(state);
    },
    decreaseItem: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: (item.count -= 1) };
        }
      });
      return upToDateCart(state);
    },
    removeItemFromCart: (state, action) => {
      state = {
        items: state.items.filter((item) => item.id !== action.payload),
      };
      return upToDateCart(state);
    },
  },
});
export const { addItemToCart, increaseItem, decreaseItem, removeItemFromCart } =
  ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
