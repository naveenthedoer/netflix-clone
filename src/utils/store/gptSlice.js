import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieReccomendationsDetails: null,
    gptSearchRecommendedResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addRecommendedMovieResult: (state, action) => {
      state.movieReccomendationsDetails =
        action.payload.movieReccomendationsDetails;
      state.gptSearchRecommendedResults =
        action.payload.gptSearchRecommendedResults;
    },
  },
});

export const { toggleGptSearchView, addRecommendedMovieResult } =
  gptSlice.actions;

export default gptSlice.reducer;
