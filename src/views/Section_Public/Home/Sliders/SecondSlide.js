// Es el segundo slide que sale en el home
import React from "react";
import "./Slide.css";
import ButtonEmpeza from "./ButtonEmpeza";

import '../../../../../src/assets/i18/i18n'
import { useTranslation } from "react-i18next";

const SecondSlide = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="h1Slide">
          <h1 >{t('home.slide2.h1')}</h1>
      </div>
      <div id="#h5Slide">
        <h5 >
        {t('home.slide2.h5Part1')}
        <br />
        {t('home.slide2.h5Part2')}
      </h5>
      </div>

      <ButtonEmpeza />

      <p className="pSlides">
        {t('home.slide2.pPart1')}
        <br />
        {t('home.slide2.pPart2')}
        <br />
        {t('home.slide2.pPart3')}
      </p>
    </>
  );
};

export default SecondSlide;
