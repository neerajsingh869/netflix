import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/movieSlice";
import gptReducer from "./slices/gptSlice";
import showSliceReducer from "./slices/showSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    series: showSliceReducer,
  },
});
