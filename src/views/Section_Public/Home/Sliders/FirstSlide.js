// Es el primer slide que sale en el home
import React from "react";
import ButtonEmpeza from "./ButtonEmpeza";

import "../../../../../src/assets/i18/i18n";
import { useTranslation } from "react-i18next";
import "./Slide.css";

const FirstSlide = () => {
  const { t } = useTranslation();
  return (
    <div className="homeContent">
      <h1 id="h1Slide">{t("home.slide1.h1")}</h1>
      <h5 id="#h5Slide">
        {t("home.slide1.h5Part1")}
        <br />
        {t("home.slide1.h5Part2")}
      </h5>
      <ButtonEmpeza className="btnSlide" />
      <p className="pSlides">
        {t("home.slide1.pPart1")}
        <br />
        {t("home.slide1.pPart2")}
      </p>
    </div>
  );
};

export default FirstSlide;
