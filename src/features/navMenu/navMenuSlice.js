import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filterRequestResponse } from "../../data/filterRequestResponse";
import { objectRequest } from "../../data/exampleJSON";

export const loadPopularPosts = createAsyncThunk(
  "categories/loadPopularPosts",
  async () => {
    //  const data = await fetch("https:ww.reddit.com/r/popular/top.json");
    //  const json = await data.json();
    //  const filteredJson = filterRequestResponse(json);
    const filteredJson = filterRequestResponse(objectRequest);
    return filteredJson;
  }
);

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
    selectedCategory: "Popular",
    posts: {},
    isLoadingPosts: false,
    hasError: false,
  },
  reducers: {
    changeSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    goToPopular: (state) => {
      state.selectedCategory = "Popular";
    },
    addCustomSearch: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPopularPosts.pending, (state) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(loadPopularPosts.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.posts = action.payload;
      })
      .addCase(loadPopularPosts.rejected, (state) => {
        state.isLoadingPosts = false;
        state.hasError = true;
        state.posts = [];
      });
  },
});

export const activeCategory = (state) => state.categories.selectedCategory;
export const predefinedCategories = (state) =>
  state.categories.predefinedCategories;
export const selectedPosts = (state) =>
  state.categories.posts;
export const isLoading = (state) => state.categories.isLoadingPosts;
export const { changeSelectedCategory, goToPopular, addCustomSearch } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
