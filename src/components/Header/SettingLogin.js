import React from "react";
import { deleteCookie } from "../../utils/Cookies/index";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { NavItemDropDown } from "../Elements/NavItem/NavItem";
import {
  DropDownMenu,
  DropdownItem,
} from "../Elements/DropDownMenu/DropDownMenu";

const SettingLogin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const token = getCookie("login");
  const adminSession = sessionStorage.getItem("admin");
  const workerSession = sessionStorage.getItem("worker");

  const handleSubmitChangeUser = async (e) => {
    e.preventDefault();
    if (adminSession === "true" || workerSession === "true") {
      navigate("/gestionAdmin");
    }
  };
  const handleSubmitChangePassword = async (e) => {
    e.preventDefault();
    navigate("/changePassword");
  };

  const handleSubmitGenerateQr = async (e) => {
    e.preventDefault();
    navigate("/generateQr");
  };
  const handleSubmitInfoSetting = async (e) => {
    e.preventDefault();
    navigate("/infoSetting");
  };

  const menuItems = {
    infoSetting: {
      id: "infoSetting",
      label: t("header.setting.infoSetting"),
      click: handleSubmitInfoSetting,
      show: sessionStorage.getItem("admin") === "true",
    },
    qr: {
      id: "qr",
      label: t("header.setting.generateQR"),
      click: handleSubmitGenerateQr,
      show: sessionStorage.getItem("admin") === "true",
    },
    password: {
      id: "password",
      label: t("header.setting.changePassword"),
      click: handleSubmitChangePassword,
      show: adminSession === "true" || workerSession === "true",
    },
    changeUser: {
      id: "changeUser",
      label: t("header.setting.changeUser"),
      click: handleSubmitChangeUser,
      show: adminSession === "true" || workerSession === "true",
    },

    logout: {
      id: "logout",
      label: t("header.setting.logout"),
      icon: faSignOutAlt,
      click: () => {
        deleteCookie("login");
        sessionStorage.clear();
        localStorage.removeItem("tkn");
        localStorage.removeItem("id_establishment");
        window.location.href = "/";
      },
      show: true,
    },
  };

  return (
    <>
      <NavItemDropDown>
        {t("header.menu.login.setting")} <FontAwesomeIcon icon={faCog} />
        <DropDownMenu>
          {Object.values(menuItems).map((item) => {
            if (item.show) {
              return (
                <DropdownItem key={item.id} click={item.click}>
                  {item.label}
                  {item.icon && (
                    <FontAwesomeIcon icon={item.icon} className="ms-2" />
                  )}
                </DropdownItem>
              );
            } else {
              return null;
            }
          })}
        </DropDownMenu>
      </NavItemDropDown>
    </>
  );
};

export default SettingLogin;
