import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "xxx",
  initialState: {
    count: 0,
  },
  reducers: {
    setCount(state) {
      state.count = state.count + 1;
    },
  },
});

export default slice.reducer;

export const { setCount } = slice.actions;
