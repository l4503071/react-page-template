import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    cardList: [],
    filter: "",
  },
  reducers: {
    setCardList(state, action) {
      state.cardList = action?.payload?.list?.map?.((card) => {
        return {
          url: card.url.replace("http://", "https://") + "/" + card.color.slice(1),
          creator: card.creator,
          labels: card.labels,
        };
      });
    },
    setFilter(state, action) {
      state.filter = action?.payload?.filter;
    },
  },
});

export default homeSlice.reducer;

export const { setCardList, setFilter } = homeSlice.actions;
