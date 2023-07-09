import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/navMenu/navMenuSlice";
import navBarReducer from "../features/navBar/navBarSlice";
import postPageReducer from "../features/postPage/postPageSlice";

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    categories: categoriesReducer,
    post: postPageReducer
  },
});
