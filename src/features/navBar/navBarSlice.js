import { createSlice } from "@reduxjs/toolkit";

export const navBarSlice = createSlice({
  name: "navBar",
  initialState: {
    displayNavBar: 'categories',
    activePostId: '',
  },
  reducers: {
    setPostActive: (state, action) => {
      state.displayNavBar = 'post';
      state.activePostId = action.payload;
    },
    setPostNotActive: (state, action) => {
      state.displayNavBar = 'categories';
      state.activePostId = '';
    },
  },
});

export const displayNavBar = (state) => state.navBar.displayNavBar;
export const activePostId = (state) => state.navBar.activePostId;
export const { setPostActive, setPostNotActive } = navBarSlice.actions;
export default navBarSlice.reducer;