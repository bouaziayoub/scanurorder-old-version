import "./PointsPage.css";
import { Link, Navigate } from "react-router-dom";
// Import Elemnts.
import { Button } from "../../../components/exportComponents";
// Import Translate.
import { useTranslation } from "react-i18next";
// Import getCookie from utils
import { getCookie } from "../../../utils/exportUtils";

function PointsPage({ authorized }) {
  const { t } = useTranslation();
  const tokenAdmin = sessionStorage.getItem("admin");
  const tokenWroker = sessionStorage.getItem("worker");
  const tokenLogin = getCookie("login");

  authorized = tokenAdmin || tokenWroker || tokenLogin;
  return (
    <>
      {!authorized ? (
        <div className="my-element " style={{display: "flex"}}>
          <div className="puntos-page bg-dark shadow-lg">
            <h1 className="puntos-page__h1">{t("points.h1")}</h1>
            <p className="puntos-page__description">{t("points.pPart1")}</p>
            <Link to="/login">
              {" "}
              <Button className="puntos-page__button">
                <p className="puntos-page__button-text">
                  {t("points.LoginBtn")}
                </p>
              </Button>
            </Link>

            <p className="puntos-page__description">{t("points.pPart2")}</p>
            <Link to="/register">
              <Button className="puntos-page__button puntos-page__button--register">
                {t("points.LoginBtn2")}
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <Navigate to="/gestionAdmin" />
      )}
    </>
  );
}

export default PointsPage;
