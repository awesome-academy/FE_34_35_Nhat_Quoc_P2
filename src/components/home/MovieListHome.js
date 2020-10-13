import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovieList } from "../../redux/slice/movieListSlice";

const MovieListHome = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  console.log(movies, error)

  return(
    <div className="newest-movie">
      <div className="container">
        <div className="title-section">
          <span className="seperator"></span>
            <h2 className="flat-title">
              <span className="flat-title__default">{t("titleSection.newest")} </span>
              <span className="flat-title__color">{t("titleSection.movie")}</span>
            </h2> 
          <span className="seperator"></span>
        </div>
        <div className="newest-movie__gird">
          { loading ? <p>Loading...</p>
            : error ? <p>{error.message}</p>
            : movies.map((e, i) => (
                <div className="movie__box" key={i}>
                  <div className="movie__poster">
                    <a href="#">
                      <img src={e.image} alt="images" />
                    </a>
                    <div className="movie__overlay">
                      <div className="movie__buy">
                        <Link to="/buy-ticket" className="movie__buy--ticket">BUY TICKET</Link>
                      </div>
                    </div>
                  </div>
                  <div className="movie__content">
                    <h3 className="movie__title">
                      <a href="#">{e.name}</a>
                    </h3>
                    <p className="movie__date">{e.releaseDate}</p>
                  </div>
                </div>
              ))
            } 
        </div>
      </div>
    </div>
  );
}

export default MovieListHome;