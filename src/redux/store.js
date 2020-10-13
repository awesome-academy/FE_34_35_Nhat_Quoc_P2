import { configureStore } from "@reduxjs/toolkit";
import movieAddEditReducer from "./slice/adminMovieAddEditSlice";
import ticketsReducer from "./slice/adminTicketsManagementSlice";
import userAddEditReducer from "./slice/adminUserAddEditSlice";
import usersReducer from "./slice/adminUsersManagementSlice";
import loginReducer from "./slice/loginSlice";
import registerReducer from "./slice/registerSlice";
import searchMovieReducer from "./slice/searchMovieSlice";
import slidesReducer from "./slice/slidesSlice";
import newPromotionReducer from "./slice/newPromotionSlice";
import blogReducer from "./slice/blogSlice";
import moviesReducer from "./slice/moviesSlice";
import cinemasReducer from "./slice/cinemasSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    tickets: ticketsReducer,
    userAddEdit: userAddEditReducer,
    movieAddEdit: movieAddEditReducer,
    register: registerReducer,
    login: loginReducer,
    searchMovie: searchMovieReducer,
    promotion: newPromotionReducer,
    blogs: blogReducer,
    slides: slidesReducer,
    movies: moviesReducer,
    cinemas: cinemasReducer,
  },
});
export default store;
