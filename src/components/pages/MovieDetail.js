import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import MovieDetailChild from "../moviedetail/MovieDetailChild";

const MovieDetail = () => {
  return (
    <div className="moviepages">
      <Header />
      <div className="main">
        <MovieDetailChild />
      </div>
      <Footer />
    </div>
  );
};
export default MovieDetail;
