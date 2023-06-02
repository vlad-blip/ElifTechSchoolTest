import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  status: "idle",
};

export const fetchProductByShop = createAsyncThunk(
  "product/fetchByShop",
  async (shop) => {
    const response = await fetch(
      `http://localhost:5000/shops/${shop}/products`
    );

    return response.json();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProductByShop.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.entities = action.payload;
    });
  },
});

export default productSlice.reducer;
