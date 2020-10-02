import { createSlice } from "@reduxjs/toolkit";

const currentChoose = createSlice({
  name: "currentChoose",
  initialState: {
    idCurrentMovieTime: "",
  },
  reducers: {
    getIdCurrentMovieTime: (state, action) => {
      state.idCurrentMovieTime = action.payload;
    },
  },
});

const { reducer: currentChooseReducer, actions } = currentChoose;
export const { getIdCurrentMovieTime } = actions;
export default currentChooseReducer;
