import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import usersApi from "../../api/usersApi";
import {
  getAll,
  getBirthday,
  getEmail,
  getGender,
  getName,
  getPassword,
  getPhone,
  getRegion,
  getToken,
} from "../../redux/slice/adminUserAddEditSlice";
import HeaderTopBar from "../partials/HeaderTopBar";

export default function AdminUserAddEdit() {
  const { t } = useTranslation("common");

  const { userId } = useParams();

  const history = useHistory();

  const dispatch = useDispatch();

  const userEdit = useSelector((state) =>
    state.users.users.find((e) => e.id === parseInt(userId))
  );

  const {
    name,
    email,
    password,
    phone,
    region,
    birthday,
    gender,
    token,
  } = useSelector((state) => state.userAddEdit);

  useEffect(() => {
    if (userId) {
      dispatch(getAll(userEdit));
    } else {
      const emptyUser = {
        name: "",
        email: "",
        password: "",
        phone: "",
        region: "",
        birthday: "",
        gender: "",
      };
      dispatch(getAll(emptyUser));
      dispatch(getToken());
    }
  }, [dispatch, userEdit, userId]);

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

    if (!userId) {
      const res = await usersApi.postUser(newUser);
      if (res.length) {
        alert(res);
      } else {
        alert("Register Success");
        // reset again to add token admin
        localStorage.setItem("token", token);
        history.push("/admin/usersManagement");
      }
    } else {
      await usersApi.putUser(userId, newUser);
      history.push("/admin/usersManagement");
    }
  };

  return (
    <div>
      <HeaderTopBar />
      <div className="admin-user-add-edit">
        <form onSubmit={onSubmit}>
          <label>{t("admin.name")}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => dispatch(getName(e.target.value))}
          />
          <label>{t("admin.email")}</label>
          <input
            type="text"
            value={email}
            onChange={(e) => dispatch(getEmail(e.target.value))}
          />
          <label>{t("admin.password")}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => dispatch(getPassword(e.target.value))}
          />
          <label>{t("admin.phone")}</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => dispatch(getPhone(e.target.value))}
          />
          <label>{t("admin.region")}</label>
          <select
            value={region}
            onChange={(e) => dispatch(getRegion(e.target.value))}
          >
            <option value="" disabled></option>
            <option value={t("admin.hcm")}>{t("admin.hcm")}</option>
            <option value={t("admin.hn")}>{t("admin.hn")}</option>
            <option value={t("admin.dn")}>{t("admin.dn")}</option>
          </select>
          <label>{t("admin.birthday")}</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => dispatch(getBirthday(e.target.value))}
          />
          <label>{t("admin.gender")}</label>
          <select
            value={gender}
            onChange={(e) => dispatch(getGender(e.target.value))}
          >
            <option value="" disabled></option>
            <option value={t("admin.male")}>{t("admin.male")}</option>
            <option value={t("admin.female")}>{t("admin.female")}</option>
          </select>

          <button className="submit" type="submit">
            {userId ? t("admin.editUser") : t("admin.addUser")}
          </button>
        </form>
      </div>
    </div>
  );
}
