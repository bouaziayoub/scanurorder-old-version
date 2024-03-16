import { Link } from "react-router-dom";
// Import Transalte.
import { useTranslation } from "react-i18next";

const ModalWelcome = ({ show, closeModal }) => {
  const { t } = useTranslation();
  return (
    <>
      {show && (
        <div className="my-element">
          <div
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "700px",
                background: "white",
                padding: 20,
                borderRadius: 5,
              }}
            >
              <h2 className="fw-bold mb-4 text-uppercase">
                {t("modals.welcome.title")}
              </h2>
              <p>
                {t("modals.welcome.text")}
                <br />
                {t("modals.welcome.text2")}
              </p>
              <Link to="/gestionAdmin">
                <button onClick={closeModal}>
                  {t("modals.welcome.button")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWelcome;
