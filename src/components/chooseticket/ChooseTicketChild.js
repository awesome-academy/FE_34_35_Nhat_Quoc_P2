import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCombo } from "../../redux/slice/comboSlice";

const ChooseTicketChild = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const { combo, loading, error } = useSelector((state) => state.combo);

  useEffect(() => {
    dispatch(getCombo());
  }, [dispatch]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <Link to="/">{t("breadcrumbs.home")}</Link>
            <Link to="/">{t("breadcrumbs.listDetails")}</Link>
            <Link to="/">{t("breadcrumbs.buyTicket")}</Link>
          </div>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div className="buy-ticket">
          <div className="container">
            <div className="buy-ticket__grid">
              <div className="frame-choose">
                <div className="frame-choose__inner">
                  <h3 className="frame-choose__title">
                    {t("titleBooking.chooseTiketFood")}
                  </h3>
                  <table className="table buy-ticket__table">
                    <thead>
                      <tr className="buy-ticket__title">
                        <th>{t("chooseTiket.ticketType")}</th>
                        <th>{t("chooseTiket.number")}</th>
                        <th>{t("chooseTiket.price")}</th>
                        <th>{t("chooseTiket.totalItem")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>
                            <b>{t("chooseTiket.adults")}</b>
                          </div>
                          <div>{t("chooseTiket.ticket2D")}</div>
                        </td>
                        <td>
                          <div className="buy-ticket__booking">
                            <button className="btn-addminus">
                              <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <input type="number" />
                            <button className="btn-addminus">
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                          </div>
                        </td>
                        <td>45,000</td>
                        <td>0</td>
                      </tr>
                      <tr className="total">
                        <td colSpan="3">{t("chooseTiket.totalAllItems")}</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table buy-ticket__table">
                    <thead>
                      <tr className="buy-ticket__title">
                        <th>{t("chooseTiket.combo")}</th>
                        <th>{t("chooseTiket.number")}</th>
                        <th>{t("chooseTiket.price")}</th>
                        <th>{t("chooseTiket.totalItem")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {combo.map((e, i) => (
                        <tr key={i}>
                          <td>
                            <div className="buy-ticket__combo">
                              <div className="buy-ticket__feature">
                                <img src={e.image} alt="images" />
                              </div>
                              <div className="buy-ticket__content">
                                <b>iCombo 1 Big</b>
                                <div>1 BẮP + 1 NƯỚC NGỌT 32 Oz</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="buy-ticket__booking">
                              <button className="btn-addminus">
                                <i
                                  className="fa fa-minus"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              <input type="number" />
                              <button className="btn-addminus">
                                <i
                                  className="fa fa-plus"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </td>
                          <td>72,000</td>
                          <td>0</td>
                        </tr>
                      ))}
                      <tr className="total">
                        <td colSpan="3">{t("chooseTiket.totalAllItems")}</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="buy-ticket__sidebar">
                <div className="ticket-movie__wrap">
                  <div className="ticket-movie__feature">
                    <Link to="/">
                      <img
                        src="assets/images/poster_movie/01.jpg"
                        alt="images"
                      />
                    </Link>
                  </div>
                  <div className="ticket-movie__detail">
                    <h3 className="ticket-movie__movie-name">CINEMA NAME</h3>
                    <ul className="ticket-movie__info">
                      <li className="ticket-movie__theater">
                        <span className="ticket-movie__title">
                          {t("buyTicket.cinema")}
                        </span>
                        <span></span>
                      </li>
                      <li className="ticket-movie__showshow">
                        <span className="ticket-movie__title">
                          {t("buyTicket.screening")}
                        </span>
                        <span></span>
                      </li>
                      <li className="ticket-movie__date">
                        <span className="ticket-movie__title">
                          {t("buyTicket.date")}
                        </span>
                        <span></span>
                      </li>
                      <li className="ticket-movie__combo">
                        <span className="ticket-movie__title">
                          {t("buyTicket.combo")}
                        </span>
                        <span></span>
                      </li>
                      <li className="ticket-movie__seat">
                        <span className="ticket-movie__title">
                          {t("buyTicket.seat")}
                        </span>
                        <span></span>
                      </li>
                      <li className="ticket-movie__total">
                        <span className="ticket-movie__title">
                          {t("buyTicket.total")}
                        </span>
                        <span></span>
                      </li>
                    </ul>
                    <div className="ticket-movie__button">
                      <Link to="/choose-seats">{t("button.continue")}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseTicketChild;
