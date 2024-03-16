import "./ModalPassword.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Import getCookie
import { getCookie, validateEmail } from "../../../../utils/exportUtils";
// Import Elements
import { ErrorMessage, Input } from "../../../../components/exportComponents";
// Import API
import { SendPasswordEmailApi } from "../../../../api/exportApi";
// Import Translate
import "../../../../assets//i18/i18n";
import { useTranslation } from "react-i18next";

export function ChangePasswordEmailModal(props, { authorized }) {
  const { t } = useTranslation();
  const tokenAdmin = sessionStorage.getItem("admin");
  const tokenWroker = sessionStorage.getItem("worker");
  const tokenLogin = getCookie("login");
  const [error, setError] = useState("");

  authorized = tokenAdmin || tokenWroker || tokenLogin;

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const handleClose = () => {
    setEmail("");
    navigate("/login");
    props.onClose();
  };

  async function handleSubmit() {
    if (email === "" || email === null) {
      setError(t("errors.required") + t("register.email"));
    } else if (!validateEmail(email)) {
      setError(t("errors.email"));
    } else {
      const res = await SendPasswordEmailApi(email);

      console.log(res);
    }
    alert(
      "An email with further instructions has been sent to your registered email address" +
        " Please check your inbox and follow the steps to reset your password.If you don't receive " +
        " the email within a few minutes, please check your spam folder. If you continue to experience" +
        " issues, please contact our support team for assistance."
    );
    handleClose();
  }
  return (
    <>
      {!authorized ? (
        <div className="my-element">
          <div className="custom-modal">
            <div className="contentModalPassword bg-dark">
              <div className="fw-bold mb-4 text-uppercase">
                <h2> {t("modals.forgotPassword.h2")}</h2>
              </div>
              <div className="formGroup">
                <form className="">
                  <div className="formemail">
                    <label className="">
                      {t("modals.forgotPassword.label")}
                    </label>
                    <Input
                      placeholder={t("login.email")}
                      value={email}
                      onChange={setEmail}
                    />
                  </div>
                </form>
              </div>
              <div>
                <button className="btn btn-danger" onClick={handleClose}>
                  {t("modals.forgotPassword.btnCancel")}
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  {t("modals.forgotPassword.btnSend")}
                </button>
              </div>
              <ErrorMessage error={error} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/gestionAdmin" />
      )}
    </>
  );
}
