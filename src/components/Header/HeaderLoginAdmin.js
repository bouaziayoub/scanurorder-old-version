import React from "react";
import { Link } from "react-router-dom";
import SettingLogin from "./SettingLogin";

import { useTranslation } from "react-i18next";
import NavItem from "../Elements/NavItem/NavItem";

function HeaderLoginAdmin() {
  const { t } = useTranslation();

  const itemsLogOut = [
    {
      label: t("header.menu.login.information"),
      route: "/information",
      id: "information",
    },
    {
      label: t("header.menu.login.table"),
      route: "/tableAdmin",
      id: "tableAdmin",
    },
    {
      label: t("header.menu.login.product"),
      route: "/products",
      id: "products",
    }, {
      label: t("header.menu.login.category"),
      route: "/category",
      id: "category",
    },
    {
      label: t("header.menu.login.menuCArta"),
      route: "/menuAdmin",
      id: "menuAdmin",
    },
    {
      label: t("header.menu.login.users"),
      route: "/workers",
      id: "workers",
    },
   
  ];

  return (
    <>
      {itemsLogOut.map((item) => (
        <NavItem key={item.id}>
          <Link to={item.route} className="nav-link" id={item.id}>
            {t(item.label)}
          </Link>
        </NavItem>
      ))}
      <SettingLogin />
    </>
  );
}

export default HeaderLoginAdmin;
