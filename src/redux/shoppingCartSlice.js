import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [],
  },
  reducers: {
    increment: (state, action) => {
      state.items = [...state.items, action.payload.item];
    },
    decrement: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload.item.name
      );
      state.items.splice(index, 1);
    },
    checkOut: (state, action) => {
      state.items = [];
    },
  },
});

export const { increment, decrement, checkOut } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
