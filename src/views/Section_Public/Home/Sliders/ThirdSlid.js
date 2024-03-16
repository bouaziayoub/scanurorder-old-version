// Es el tercer slide que sale en el home
import React from "react";
import "./Slide.css";
import ButtonEmpeza from "./ButtonEmpeza";

import '../../../../../src/assets/i18/i18n'
import { useTranslation } from "react-i18next";

const ThirdSlid = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 id="h1Slide">{t('home.slide3.h1')}</h1>
      <h5 id="#h5Slide">
        {t('home.slide3.h5Part1')}
        <br />
        {t('home.slide3.h5Part2')}
      </h5>

          <ButtonEmpeza />

      <p className="pSlides">
        {t('home.slide3.pPart1')}
        <br />
        {t('home.slide3.pPart2')}
        <br />
        {t('home.slide3.pPart3')}
      </p>
    </>
  );
};

export default ThirdSlid;
