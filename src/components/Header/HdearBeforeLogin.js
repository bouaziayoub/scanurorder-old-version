import React from "react";
import { Link } from "react-router-dom";

// Importar Los Iconos Necesarios desde la librería awesome para El header tenia que usar este comando tambien:
// npm install--save @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import NavItem from "../Elements/NavItem/NavItem";

function HdearBeforeLogin() {
  const { t } = useTranslation();

  const itemsLogIn = [
    {
      id: "links",
      label: t("header.menu.logout.home"),
      route: "/",
    },
    {
      id: "mesas",
      label: t("header.menu.logout.points"),
      route: "/puntos",
    },
    {
      id: "contact",
      label: t("header.menu.logout.contact"),
      route: "/contact",
    },
    {
      id: "login",
      label: t("header.menu.login.login"),
      route: "/login",
      icon: faSignInAlt,
    },
  ];

  return (
    <>
      {itemsLogIn.map((item) => (
        <NavItem key={item.id}>
          <Link to={item.route} className="nav-link" id={item.id}>
            {item.label}
            {item.icon && <FontAwesomeIcon icon={item.icon} className="ms-1" />}
          </Link>
        </NavItem>
      ))}
    </>
  );
}

export default HdearBeforeLogin;
