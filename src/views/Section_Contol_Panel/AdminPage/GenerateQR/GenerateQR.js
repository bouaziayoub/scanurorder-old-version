import React from "react";
import { imgQr } from "../../../../api/exportApi";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const GenerateQR = ({ authorized }) => {
  const { t } = useTranslation();
  authorized = sessionStorage.getItem("admin");

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.print();
  };
  return (
    <>
      {authorized ? (
        <div className="my-element">
          <div className="container" style={{ paddingTop: "50px" }}>
            <div
              className="card mx-auto"
              style={{ width: "18rem", marginTop: "50px" }}
            >
              <img className="card-img-top" src={imgQr} alt="QR CODE" />
              <div className="card-body">
                <p className="card-text h4">{t("info.scan")}</p>
                <button onClick={handleSubmit}>{t("button.print")}</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default GenerateQR;
