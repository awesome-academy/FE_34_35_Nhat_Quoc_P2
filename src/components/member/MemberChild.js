import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import usersApi from "../../api/usersApi";
import {
  getBirthday,
  getEmail,
  getGender,
  getMember,
  getName,
  getPassword,
  getPhone,
  getRegion,
  getMemberId,
} from "../../redux/slice/memberSlice";

const MemberChild = () => {
  const { t } = useTranslation("common");

  const history = useHistory();

  const dispatch = useDispatch();

  const {
    loading,
    error,
    name,
    email,
    password,
    phone,
    region,
    birthday,
    gender,
    memberId,
  } = useSelector((state) => state.member);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    } else {
      const base64Url = token.split(".")[1];
      const getValueToToken = JSON.parse(atob(base64Url));
      const getIdToToken = getValueToToken.sub;
      dispatch(getMember(getIdToToken));
      dispatch(getMemberId(getIdToToken));
    }
  }, [dispatch, history]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      phone,
      region,
      birthday,
      gender,
    };
    await usersApi.putUser(memberId, newUser);
    alert(t("member.success"));
    history.push("/");
  };

  return (
    <div className="member__bg">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div className="container">
          <div className="member__info">
            <form onSubmit={onSubmit}>
              <label>{t("member.name")}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => dispatch(getName(e.target.value))}
              />
              <label>{t("member.email")}</label>
              <input
                type="text"
                value={email}
                onChange={(e) => dispatch(getEmail(e.target.value))}
              />
              <label>{t("member.password")}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => dispatch(getPassword(e.target.value))}
              />
              <label>{t("member.phone")}</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => dispatch(getPhone(e.target.value))}
              />
              <label>{t("member.region")}</label>
              <select
                value={region}
                onChange={(e) => dispatch(getRegion(e.target.value))}
              >
                <option value="" disabled></option>
                <option value={t("member.hcm")}>{t("member.hcm")}</option>
                <option value={t("member.hn")}>{t("member.hn")}</option>
                <option value={t("member.dn")}>{t("member.dn")}</option>
              </select>
              <label>{t("member.birthday")}</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => dispatch(getBirthday(e.target.value))}
              />
              <label>{t("member.gender")}</label>
              <select
                value={gender}
                onChange={(e) => dispatch(getGender(e.target.value))}
              >
                <option value="" disabled></option>
                <option value="male">{t("member.male")}</option>
                <option value="female">{t("member.female")}</option>
              </select>
              <div>
                <button type="submit">{t("member.save")}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberChild;
