import { createSlice, current } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    predefinedCategories: [
      "Popular",
      "Videogames",
      "Sports",
      "Business",
      "Television",
      "Celebs",
      "Animals and Mascots",
      "Anime",
      "Art",
      "Cars",
      "DIY",
      "Culture, race and ethnicities",
      "Food",
      "History",
    ],
    selectedCategories: ["Popular"],
  },
  reducers: {
    addSelectedCategory: (state, action) => {
      state.selectedCategories = [...state.selectedCategories, action.payload];
    },
    removeSelectedCategory: (state, action) => {
      let removeCategorySelected = state.selectedCategories.filter(
        (item) => item !== action.payload
      );
      if (removeCategorySelected.length < 1) {
        removeCategorySelected = ["Popular"];
      }
      state.selectedCategories = removeCategorySelected;
    },
  },
});

export const activeCategories = (state) =>
  state.categories.selectedCategories;
export const predefinedCategories = (state) =>
  state.categories.predefinedCategories;
export const { addSelectedCategory, removeSelectedCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
