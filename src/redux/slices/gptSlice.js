import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptMovies: [],
    gptMoviesName: [],
  },
  reducers: {
    addRecommendedMovies: (state, action) => {
      const { gptMovies, gptMoviesName } = action.payload;

      state.gptMovies = gptMovies;
      state.gptMoviesName = gptMoviesName;
    },
  },
});

export const { addRecommendedMovies } = gptSlice.actions;
export default gptSlice.reducer;
