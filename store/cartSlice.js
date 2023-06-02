import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || {
  entities: [],
  totalPrice: 0,
};

export const addCoupon = createAsyncThunk(
  "coupon/validate",
  async (couponName) => {
    try {
      const response = await fetch(
        `http://localhost:5000/coupon/${couponName}`
      );

      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        const err = await response.text();
        throw new Error(err);
      }
    } catch (err) {
      throw new Error(err);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(addCoupon.rejected, (state, action) => {
      alert(action.error.message);
    });
    builder.addCase(addCoupon.fulfilled, (state, action) => {
      const { discount } = action.payload;

      if (state.totalPrice === 0) {
        alert("It can't be even cheeper!");
      } else if (discount >= state.totalPrice) {
        state.totalPrice = 0;
        alert("Discount applied! Now it's completely free.");
      } else {
        state.totalPrice -= discount;
        alert("Discount applied!");
      }
    });
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
