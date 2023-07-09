import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  filterCommentsRequestResponse,
  filterContentRequestResponse,
} from "../../data/filterCommentsRequestResponse";

export const loadPostContent = createAsyncThunk(
  "post/loadPostContent",
  async (permalink) => {
    const data = await fetch(`https://www.reddit.com${permalink}.json`);
    const json = await data.json();
    const filteredPostContentJson = filterContentRequestResponse(json);
    const filteredCommentsJson = filterCommentsRequestResponse(json);
    const filteredPostJson = [filteredPostContentJson, filteredCommentsJson];
    return filteredPostJson;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState: {
    activePostContent: "",
    activePostComments: "",
    isLoadingComments: false,
    loadingCommentsHasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPostContent.pending, (state) => {
        state.isLoadingComments = true;
        state.loadingCommentsHasError = false;
        state.isPostLoading = true;
      })
      .addCase(loadPostContent.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.activePostContent = action.payload[0];
        state.activePostComments = action.payload[1];
      })
      .addCase(loadPostContent.rejected, (state) => {
        state.isLoadingComments = false;
        state.loadingCommentsHasError = true;
        state.activePostContent = {};
        state.activePostComments = {};
      });
  },
});

export const selectedComments = (state) => state.post.activePostComments;
export const selectedPost = (state) => state.post.activePostContent;
export const loadingComments = (state) => state.post.isLoadingComments;
export default postSlice.reducer;
