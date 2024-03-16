import "./RegisterUser.css";
import React, { useState, useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
// Import Translate Files

import { useTranslation } from "react-i18next";
// Register using Api
import { RegisterUserApi } from "../../../../../api/exportApi";
// Import Elemets
import {
  PasswordInput,
  Input,
  ErrorMessage,
  Form,
} from "../../../../../components/exportComponents";

import {
  loginEmailContext,
  getCookie,
  validateName,
  validateEmail,
  validatePassword,
} from "../../../../../utils/exportUtils";

const RegisterUser = ({ authorized }) => {
  authorized = sessionStorage.getItem("admin");

  const navigate = useNavigate();
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Save Email en el context
  const emailContext = useContext(loginEmailContext);

  //Validate the RepeatPassword Password fields if they coincide.
  function validateConfirmPassword(password, repeatPassword) {
    if (password !== repeatPassword) {
      return t("errors.confirm");
    }
    return "";
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (name === "") {
        setError(t("errors.required") + t("register.name"));
      } else if (!validateName(name)) {
        setError(t("errors.name"));
      } else if (surName === "") {
        setError(t("errors.required") + t("register.surname"));
      } else if (!validateName(surName)) {
        setError(t("errors.surname"));
      } else if (email === "") {
        setError(t("errors.required") + t("register.email"));
      } else if (!validateEmail(email)) {
        setError(t("errors.email"));
      } else if (password === "" || password === null) {
        setError(t("errors.required") + t("login.password"));
      } else if (!validatePassword(password)) {
        setError(t("errors.passRegister"));
      } else if (confirmPassword === "") {
        setError(t("errors.required") + "confirm.. " + t("login.password"));
      } else if (password !== confirmPassword) {
        setError(t("errors.confirm"));
      } else {
        const errorValidationPassorwd = validateConfirmPassword(
          password,
          confirmPassword
        );
        setError(errorValidationPassorwd);
        if (!errorValidationPassorwd) {
          const data = await RegisterUserApi(name, surName, email, password);
          emailContext.setLoginEmail(email);

          const idEstablishment = data.idEstablishment;
          localStorage.setItem("id_establishment", idEstablishment);
        }
      }
    } catch (error) {
      setError(t("errors.request"));
    }
  }

  return (
    <>
      {authorized ? (
        <Form>
          <div className="mb-md-1 mt-md-1">
            <h4 className=" mb-4 text-uppercase">{t("register.h5")}</h4>
            <div className="form-outline form-white mb-1 form">
              <Input
                type="text"
                id="name"
                placeholder={t("register.name")}
                value={name}
                onChange={setName}
              />

              <Input
                type="text"
                id="surname"
                placeholder={t("register.surname")}
                value={surName}
                onChange={setSurName}
              />
              <Input
                type="email"
                id="email-input"
                placeholder={t("register.email")}
                value={email}
                onChange={setEmail}
              />

              <PasswordInput onChange={setPassword} />
              <PasswordInput
                placeholder={t("register.repeatPassword")}
                onChange={setConfirmPassword}
              />

              <button
                className="btn btn-outline-light btn-lg mt-3"
                type="submit"
                id="register_btn "
                onClick={handleSubmit}
              >
                {" "}
                {t("register.register")}{" "}
              </button>
              <ErrorMessage error={error} />
            </div>
          </div>

          {/* <p className="mb-0 mt-0">
            {t("register.login")}
            <Link
              to="/login"
              className="text-white-40 fw-bold"
              style={{ margin: 5 + "px" }}
            >
              {t("register.loginA")}
            </Link>
          </p> */}
        </Form>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default RegisterUser;
