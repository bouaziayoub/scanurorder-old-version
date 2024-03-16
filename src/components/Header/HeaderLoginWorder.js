import React from "react";
import { Link } from "react-router-dom";
import SettingLogin from "./SettingLogin";

import { useTranslation } from "react-i18next";
import NavItem from "../Elements/NavItem/NavItem";

function HeaderLoginWorker() {
  const { t } = useTranslation();

  const itemsLogOut = [
    {
      label: t("header.menu.login.order"),
      route: "/ordersTable",
      id: "order",
    },
    {
      label: t("header.menu.login.kitchen"),
      route: "/kitchen",
      id: "cocina",
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
      <SettingLogin/>
    </>
  );
}

export default HeaderLoginWorker;
