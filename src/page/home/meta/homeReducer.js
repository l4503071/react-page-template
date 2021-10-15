import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    cardList: [],
    filter: "",
  },
  reducers: {
    setCardList(state, action) {
      state.cardList = action?.payload?.list ?? [];
    },
    setFilter(state, action) {
      state.filter = action?.payload?.filter;
    },
  },
});

export default homeSlice.reducer;

export const { setCardList, setFilter } = homeSlice.actions;
