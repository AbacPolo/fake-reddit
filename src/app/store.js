import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../components/navMenu/navMenuSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer
  },
});
