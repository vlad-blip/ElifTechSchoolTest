import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName,
  },
});
