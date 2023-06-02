import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.entities.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        const newItem = { ...action.payload };
        newItem.quantity = 1;
        newItem.totalPrice = action.payload.price;

        state.entities.push(newItem);
      }

      state.totalPrice += action.payload.price;
    },
    removeItem(state, action) {
      const existingItem = state.entities.find(
        (item) => item._id === action.payload._id
      );

      if (action.payload.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
        state.totalPrice -= existingItem.price;
      } else {
        state.entities = state.entities.filter(
          (item) => item._id !== existingItem._id
        );
        state.totalPrice -= existingItem.totalPrice;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
