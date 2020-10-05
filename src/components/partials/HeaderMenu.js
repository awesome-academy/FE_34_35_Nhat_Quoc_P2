import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  const { t } = useTranslation("common");

  return (
    <header className="header">
      <div className="container">
        <div className="header__flex">
          <div className="header__logo">
            <Link to="/" title="Logo">
              <img src="assets/images/logo/01.png" alt="images" />
            </Link>
          </div>
          <div className="menu__content">
            <div className="menu__nav">
              <nav>
                <ul className="menu">
                  <li className="menu__list">
                    <Link to="/" className="active menu__list--link">
                      {t("menu.home")}
                    </Link>
                    <ul className="menu__sub">
                      <li className="menu__sub--list">
                        <Link to="/" className="active menu__sub--link">
                          {t("menu.home")} 1
                        </Link>
                      </li>
                      <li className="menu__sub--list">
                        <Link to="/" className="menu__sub--link">
                          {t("menu.home")} 2
                        </Link>
                      </li>
                      <li className="menu__sub--list">
                        <Link to="/" className="menu__sub--link">
                          {t("menu.home")} 3
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu__list">
                    <Link className="menu__list--link" to="/">
                      {t("menu.buyTicket")}
                    </Link>
                  </li>
                  <li className="menu__list">
                    <Link className="menu__list--link" to="/">
                      {t("menu.movie")}
                    </Link>
                  </li>
                  <li className="menu__list">
                    <Link className="menu__list--link" to="/">
                      {t("menu.cinema")}
                    </Link>
                  </li>
                  <li className="menu__list">
                    <Link className="menu__list--link" to="/">
                      {t("menu.member")}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
