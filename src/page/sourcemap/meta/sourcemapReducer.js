/* eslint-disable no-debugger */
import { createSlice } from "@reduxjs/toolkit";
import tabConfigList from "./tabConfig";

export const sourcemapSlice = createSlice({
  name: "sourcemap",
  initialState: {
    tabConfigList: tabConfigList,
  },
  reducers: {
    editConfigList(state, action) {
      const key = action?.payload?.key;
      if (!key) {
        return;
      }
      const tabConfigList = state.tabConfigList.map(item => {
        if (item.key !== key) {
          return item;
        }
        return {
          ...item,
          ...action?.payload?.props,
        };
      });
      return {
        ...state,
        tabConfigList,
      };
    },
  },
});

export default sourcemapSlice.reducer;

export const { editConfigList } = sourcemapSlice.actions;
