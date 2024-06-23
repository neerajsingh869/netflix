import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    recommendedMovies: [],
    recommendedMoviesName: []
  },
  reducers: {
    addRecommendedMovies: (state, action) => {
      const {recommendedMovies, recommendedMoviesName} = action.payload;

      state.recommendedMovies = recommendedMovies;
      state.recommendedMoviesName = recommendedMoviesName;
    }
  }
})

export const {addRecommendedMovies} = gptSlice.actions;
export default gptSlice.reducer;