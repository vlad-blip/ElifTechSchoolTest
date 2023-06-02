import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHistory = createAsyncThunk(
  "history/fetchHistory",
  async ({ email, phone }) => {
    const response = await fetch("http://localhost:5000/history", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, phone }),
    });
    const data = await response.json();
    return data;
  }
);

const initialState = {
  status: "idle",
  orderList: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHistory.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      return {
        status: "fulfilled",
        orderList: action.payload,
      };
    });
  },
});

export default historySlice.reducer;
