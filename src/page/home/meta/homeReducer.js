import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    cardList: [],
  },
  reducers: {
    setCardList(state, action) {
      state.cardList = action?.payload?.list ?? [];
    },
  },
});

export default homeSlice.reducer;

export const { setCardList } = homeSlice.actions;
