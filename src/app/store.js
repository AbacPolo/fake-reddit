import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../components/navMenu/navMenuSlice";
import navBarReducer from "../features/navBar/navBarSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    navBar: navBarReducer,
  },
});
