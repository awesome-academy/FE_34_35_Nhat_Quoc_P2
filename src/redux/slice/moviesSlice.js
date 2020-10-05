import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesApi from "../../api/moviesApi";

export const getMovies = createAsyncThunk("getMovies", async () => {
  const currentMovies = await moviesApi.getMovies();
  return currentMovies;
});

export const getMoviesHome = createAsyncThunk("getMoviesHome", async () => {
  const currentMoviesHome = await moviesApi.getMoviesHome();
  return currentMoviesHome;
});

export const getMovieDetail = createAsyncThunk("getMovieDetail", async () => {
  const currentMovieDetail = await moviesApi.getMovieDetail();
  return currentMovieDetail;
});

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    movies: [],
    loading: false,
    error: "",
  },
  reducers: {
    removeMovie: (state, action) => {
      const removeMoveId = action.payload;
      state.movies = state.movies.filter((e) => e.id !== removeMoveId);
    },
  },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
    },

    [getMovies.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },

    [getMoviesHome.pending]: (state) => {
      state.loading = true;
    },

    [getMoviesHome.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMoviesHome.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },

    [getMovieDetail.pending]: (state) => {
      state.loading = true;
    },

    [getMovieDetail.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMovieDetail.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: moviesReducer, actions } = moviesSlice;
export const { removeMovie } = actions;
export default moviesReducer;
