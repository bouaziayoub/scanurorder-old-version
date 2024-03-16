import React from "react";
import {
  es,
  esActive,
  cat,
  catActive,
  en,
  enActive,
} from "../../assets/images/Flags_languange/IconFlags";
import { useTranslation } from "react-i18next";
import { NavItemDropDown } from "../Elements/NavItem/NavItem";
import {
  DropDownMenu,
  DropdownItem,
} from "../Elements/DropDownMenu/DropDownMenu";

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();

  const items = [
    {
      id: "es",
      children: t("header.es"),
      src: i18n.language === "es" ? esActive : es,
    },
    {
      id: "cat",
      children: t("header.cat"),
      src: i18n.language === "cat" ? catActive : cat,
    },
    {
      id: "en",
      children: t("header.en"),
      src: i18n.language === "en" ? enActive : en,
    },
  ];

  return (
    <>
      <NavItemDropDown>
        {t("header.language")}{" "}
        <img
          src={items.find((item) => item.id === i18n.language)?.src}
          style={{ width: "30px" }}
          alt=""
        />
        <DropDownMenu>
          {items.map(({ id, children }) => (
            <DropdownItem key={id} click={() => i18n.changeLanguage(id)}>
              {children}
            </DropdownItem>
          ))}
        </DropDownMenu>
      </NavItemDropDown>
    </>
  );
};

export default ChangeLanguage;
