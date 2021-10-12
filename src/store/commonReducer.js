import { createSlice } from "@reduxjs/toolkit";

const menuList = [
  {
    name: "首页",
    path: "/",
  },
  {
    name: "应用中心",
    path: "/application",
  },
];

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    menuList: menuList,
  },
});

export default commonSlice.reducer;
