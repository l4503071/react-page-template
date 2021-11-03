import { createSlice } from "@reduxjs/toolkit";

export const sourcemapSlice = createSlice({
  name: "sourcemap",
  initialState: {
  },
  reducers: {
  },
});

export default sourcemapSlice.reducer;

export const { setCardList, setFilter } = sourcemapSlice.actions;
