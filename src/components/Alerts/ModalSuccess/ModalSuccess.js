import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ModalSuccess = ({ show, closeModal, accessModal }) => {
  const { t } = useTranslation();
  accessModal = sessionStorage.getItem("admin");
  return (
    <>
      {accessModal ? (
        <>
          {show && (
            <div className="my-element">
              <div className="comtainer_modal_success">
                <div className="section_modal_success">
                  <h2 className="fw-bold mb-4 text-uppercase">
                    {t("msgSuccess.title")}
                  </h2>
                  <p>{t("msgSuccess.text")}</p>
                  <Link to="/information">
                    <button onClick={closeModal}>{t("button.cont")}</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="my-element">
          <div className="comtainer_modal_success">
            <div className="section_modal_success">
              <h2 className="fw-bold mb-4 text-uppercase">
                {t("msgSuccess.title")}
              </h2>
              <p>{t("msgSuccess.text")}</p>
              <Link to="/ordersTable">
                <button onClick={closeModal}>{t("button.cont")}</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSuccess;
