import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHistory = createAsyncThunk(
  "history/fetchHistory",
  async ({ email, phone }) => {
    try {
      const response = await fetch(
        "https://eliftech-qkyz.onrender.com/history",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, phone }),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
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
      alert(action.error.message);
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
