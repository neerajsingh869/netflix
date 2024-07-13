import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "series",
  initialState: {
    nowPlayingSeries: [],
    upcomingSeries: [],
    popularSeries: [],
    topRatedSeries: [],
    trailerSeries: null,
  },
  reducers: {
    addNowPlayingSeries: (state, action) => {
      state.nowPlayingSeries = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
    addUpcomingSeries: (state, action) => {
      state.upcomingSeries = action.payload;
    },
    addTrailerSeries: (state, action) => {
      state.trailerSeries = action.payload;
    },
  },
});

export const {
  addNowPlayingSeries,
  addUpcomingSeries,
  addPopularSeries,
  addTopRatedSeries,
  addTrailerSeries,
} = showSlice.actions;

export default showSlice.reducer;
