import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filterRequestResponse } from "../../data/filterRequestResponse";

export const loadPopularPosts = createAsyncThunk(
  "categories/loadPopularPosts",
  async () => {
    const data = await fetch("https://www.reddit.com/r/popular/top.json");
    const json = await data.json();
    const filteredJson = filterRequestResponse(json);
    return filteredJson;
  }
);

export const loadSelectedCategory = createAsyncThunk(
  "categories/loadSelectedCategory",
  async (category) => {
    const data = await fetch(`https://www.reddit.com/search.json?q=${category}&sort=hot`);
    const json = await data.json();
    const filteredJson = filterRequestResponse(json);
    return filteredJson;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    initialLoadDone: false,
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
    loadingPostsHasError: false,
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
        state.loadingPostsHasError = false;
      })
      .addCase(loadPopularPosts.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.initialLoadDone = true;
        state.posts = action.payload;
      })
      .addCase(loadPopularPosts.rejected, (state) => {
        state.isLoadingPosts = false;
        state.loadingPostsHasError = true;
        state.posts = {};
      })
      .addCase(loadSelectedCategory.pending, (state) => {
        state.isLoadingPosts = true;
        state.loadingPostsHasError = false;
      })
      .addCase(loadSelectedCategory.fulfilled, (state, action) => {
        state.isLoadingPosts = false;
        state.posts = action.payload;
      })
      .addCase(loadSelectedCategory.rejected, (state) => {
        state.isLoadingPosts = false;
        state.loadingPostsHasError = true;
        state.posts = {};
      })
  },
});

export const activeCategory = (state) => state.categories.selectedCategory;
export const predefinedCategories = (state) =>
  state.categories.predefinedCategories;
export const selectedPosts = (state) => state.categories.posts;
export const isLoading = (state) => state.categories.isLoadingPosts;
export const initialLoad = (state) => state.categories.initialLoadDone;
export const { changeSelectedCategory, goToPopular, addCustomSearch } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
