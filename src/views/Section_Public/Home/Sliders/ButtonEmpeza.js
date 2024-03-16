// Este button sirve para poder ir a la pagina (Iniciar session).
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/Elements/Button/Button";

import "../../../../../src/assets/i18/i18n";
import { useTranslation } from "react-i18next";

const ButtonEmpeza = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="/login">
        <Button className=" m-5">{t("home.buttonEmpeza")}</Button>
      </Link>
    </>
  );
};

export default ButtonEmpeza;
