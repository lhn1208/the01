import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],           // 처음에는 빈 배열
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
     addToCart: (state, action) => {
      const isItemCart = state.carts.find((item) => item.id === action.payload.id);
      if (isItemCart) {
        state.carts = state.carts.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
                totalPrice: (item.quantity + action.payload.quantity) * item.price,
              }
            : item
        );
      } else {
        const newItem = {
          ...action.payload,
          totalPrice: action.payload.price * action.payload.quantity,
        };
        state.carts.push(newItem);
      }
      state.totalAmount = state.carts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.itemCount = state.carts.length;
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.itemCount = state.carts.length;
    },
  }
});

export const { addToCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
