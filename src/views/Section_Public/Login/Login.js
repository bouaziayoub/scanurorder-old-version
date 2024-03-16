import "./login.css";
import React, { useState, useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
// Import Translation files.
// import "../../../assets/i18/i18n";
import { useTranslation } from "react-i18next";
// Import from Utils
import {
  loginEmailContext,
  getCookie,
  validatePassword,
  validateEmail,
} from "../../../utils/exportUtils";
// import APIs.
import { LoginApi, ShowAdmin } from "../../../api/exportApi";
// Import Elements.
import {
  ErrorMessage,
  PasswordInput,
  Input,
  Form,
} from "../../../components/exportComponents";

export const Login = ({ authorized }) => {
  // Declare the translation variable
  const { t } = useTranslation();
  authorized = getCookie("login");
  const navigate = useNavigate();
  const emailContext = useContext(loginEmailContext);

  //Declare the variable in which we are going to save the status of each input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setError(t("errors.required") + t("login.email") );
    } else if (!validateEmail(email)) {
      setError(t("errors.email"));
    } else if (password === "") {
      setError(t("errors.required") + t("login.password"));
    } else if (!validatePassword(password)) {
      setError(t("errors.pass"));
    } else {
      try {
        const response = await LoginApi(email, password);
        if (!response) {
          setError(t("errors.emailPass"));
        } else {

          navigate("/success");

          emailContext.setLoginEmail(email);
          const response = await ShowAdmin();
          const idEstablishment = response.user.id_establishment;
          localStorage.setItem("id_establishment", idEstablishment);

        }
      } catch (error) {
        setError(t("errors.request"));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {authorized ? (
        <Navigate to="/gestionAdmin" />
      ) : (
        <Form>
          <div className="mb-md-1 mt-md-1">
            <h4 className="fw-bold mb-4 text-uppercase">{t("login.h1")}</h4>
            <div className="form-outline form-white mb-4 form">
              <Input
                placeholder={t("login.email")}
                value={email}
                onChange={setEmail}
              />
              <PasswordInput onChange={setPassword} />
              <button
                className="btn btn-outline-light btn-lg"
                type="submit"
                id="login-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {t("login.login")}
              </button>
              <ErrorMessage error={error} />
            </div>
          </div>
          <p className="mb-0">
            {t("login.register")}
            <Link
              to="/register"
              className="text-white-40 fw-bold"
              style={{ margin: 5 + "px" }}
            >
              {t("login.registerA")}
            </Link>
          </p>
          <p className="mb-0">
            {t("login.forgot")}
            <Link
              to="/changePasswordEmail"
              className="text-white-40 fw-bold"
              style={{ margin: 5 + "px" }}
            >
              {t("login.forgotA")}
            </Link>
          </p>
        </Form>
      )}
    </>
  );
};
