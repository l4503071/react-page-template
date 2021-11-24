import { createSlice } from "@reduxjs/toolkit";
import axios from "@/util/http";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    cardList: [],
    filter: "",
  },
  reducers: {
    setCardList(state, action) {
      const list = action?.payload?.list?.map?.((card) => {
        return {
          url: card.url.replace("http://", "https://") + "/" + card.color.slice(1),
          creator: card.creator,
          labels: card.labels,
        };
      });
      action.payload?.append ? state.cardList.push(...list) : state.cardList = list;
    },
    setFilter(state, action) {
      state.filter = action?.payload?.filter;
    },
  },
});

export default homeSlice.reducer;

export const { setFilter } = homeSlice.actions;

export const getCardList =
  ({ append = false } = {}) =>
    (dispatch) => {
      axios.get("/getCardList").then((res) => {
        if (res?.code !== 0) {
          return;
        }
        dispatch(homeSlice.actions.setCardList({ list: res?.data, append }));
      });
    };
