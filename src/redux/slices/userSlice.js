import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.uid = action.payload;
    },
    removeUser: (state) => {
      state.uid = null;
    }
  }
})

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;