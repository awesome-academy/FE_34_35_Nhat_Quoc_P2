import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCinemas } from "../../redux/slice/cinemasSlice";

const ShowTime = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { cinemas, loading, error } = useSelector((state) => state.cinemas);

  useEffect(() => {
    dispatch(getCinemas());
  }, [dispatch]);

  return (
    <div className="movie-detail__st">
      <h3 className="movie-detail__title">{t("movieDetail.title")}</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        cinemas.map((e, i) => (
          <div className="cinema__wrap" key={i}>
            <h4 className="cinema__name">{e.name}</h4>
            <div className="cinema__showtime">
              <div className="cinema__item">
                <label>April 1, 2020</label>
                <div className="cinema__list">
                  {e.session.map((el, id) => (
                    <Link key={id} to="/choose-ticket" className="cinema__link">
                      {el.time}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShowTime;
