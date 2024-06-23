import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/movieSlice";
import gptReducer from "./slices/gptSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
