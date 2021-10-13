import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    menuList: [],
  },
  reducers: {
    setMenuList(state, action) {
      state.menuList = action?.payload?.list ?? [];
    },
  },
});

export default commonSlice.reducer;

export const { setMenuList } = commonSlice.actions;
