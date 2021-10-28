import { createSlice } from "@reduxjs/toolkit";

export const xxxSlice = createSlice({
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

export default xxxSlice.reducer;

export const { setCount } = xxxSlice.actions;
