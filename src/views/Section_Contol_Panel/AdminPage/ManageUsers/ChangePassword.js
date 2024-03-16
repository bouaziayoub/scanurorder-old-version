import "./ManageUsers.css";
import React, { useState } from "react";
import { Container, Button, Form, FormGroup } from "reactstrap";
import { Navigate } from "react-router-dom";
// Import Elements.
import {
  ErrorMessage,
  Input,
  PasswordInput,
} from "../../../../components/exportComponents";
// Import utils
import { getCookie } from "../../../../utils/exportUtils";
// Import API
import { ChangePasswordApi } from "../../../../api/exportApi";
// Import regex
import { validatePassword } from "../../../../utils/exportUtils";
import { useTranslation } from "react-i18next";

export const ChangePassword = ({ authorized }) => {
  authorized = getCookie("login");

  const { t } = useTranslation();

  let token = localStorage.getItem("tkn");
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Validate the RepeatPassword Password fields if they coincide.
  function validateConfirmPassword(password, repeatPassword) {
    if (password !== repeatPassword) {
      return "Las contraseñas no coinciden";
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    token = token.replace(/^"(.*)"$/, "$1");
    const errorValidationPassorwd = validateConfirmPassword(
      password,
      confirmPassword
    );
    setError(errorValidationPassorwd);

    if (password !== "" && confirmPassword !== "") {
      if (!validatePassword(password)) {
        setError(t("errors.pass"));
      } else if (password !== confirmPassword) {
        setError(t("errors.confirm"));
      } else {
        await ChangePasswordApi(token, password);
        alert("You have changed the password correctly");
      }
    } else {
      setError(t("errors.emptyFields"));
    }
  }

  return (
    <>
      {authorized ? (
        <div className="my-element">
          <h2 className=" text-light text-center ">{t("header.setting.changePassword")}</h2>
          <Container className="containerGestionUsuarios bg-dark py-4">
            <Form>
              <FormGroup className="d-none">
                <Input />
              </FormGroup>
              <FormGroup>
                <PasswordInput onChange={setPassword} />

                <PasswordInput
                  placeholder={t("register.repeatPassword")}
                  onChange={setConfirmPassword}
                />
              </FormGroup>
              <Button color="primary" onClick={handleSubmit}>
              {t("button.save")}
              </Button>
              <ErrorMessage error={error} />
            </Form>
          </Container>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
