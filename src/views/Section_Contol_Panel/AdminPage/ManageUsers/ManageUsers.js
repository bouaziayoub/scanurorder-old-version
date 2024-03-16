import "./ManageUsers.css";
import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label } from "reactstrap";
// Import API
import { LoginUsersApi } from "../../../../api/exportApi";
// Import Elements
import {
  ErrorMessage,
  PasswordInput,
  Input,
} from "../../../../components/exportComponents";
// Import getCookie
import {
  loginEmailContext,
  getCookie,
  validatePassword,
} from "../../../../utils/exportUtils";

import { useTranslation } from "react-i18next";

export const ManageUsers = ({ authorized }) => {
  authorized = getCookie("login");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const emailContext = useContext(loginEmailContext);
  const email = emailContext.loginEmail;
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  let token = localStorage.getItem("tkn");
  const storageAdmin = sessionStorage.getItem("admin");
  const storageWorker = sessionStorage.getItem("worker");

  async function handleLogin(endpoint) {
    if (password === "") {
      setError(t("errors.required") + t("login.password"));
    } else if (!validatePassword(password)) {
      setError(t("errors.pass"));
    } else {
      const response = await LoginUsersApi(email, password, token, endpoint);
      if (response.token_resp) {
        if (endpoint === "admin") {
          navigate("/success");
          window.location.reload();
          sessionStorage.removeItem("worker");
          sessionStorage.setItem("admin", "true");
        } else {
          navigate("/success");
          window.location.reload();
          sessionStorage.removeItem("admin");
          sessionStorage.setItem("worker", "true");
        }
      } else {
        setError("Wrong password!!");
      }
    }
  }

  async function handleSubmitAdmin(e) {
    e.preventDefault();
    token = token.replace(/^"(.*)"$/, "$1");
    handleLogin("admin");
  }

  async function handleSubmitWorker(e) {
    e.preventDefault();
    token = token.replace(/^"(.*)"$/, "$1");
    handleLogin("worker");
  }

  return (
    <>
      {authorized ? (
        <div className="my-element">
          <h2 className="text-light text-center">
            {t("header.setting.changeUser")}
          </h2>
          <Container className="containerGestionUsuarios bg-dark py-4">
            <Form>
              <FormGroup className="d-none">
                <Input />
              </FormGroup>
              <FormGroup>
                <Label
                  className="form-check-label text-white"
                  htmlFor="password"
                >
                  {t("login.password")}
                </Label>
                <PasswordInput onChange={setPassword} />
              </FormGroup>
              <FormGroup className="text-center">
                {storageWorker ? (
                  <Button color="primary" onClick={handleSubmitAdmin}>
                    {t("login.accessAdmin")}
                  </Button>
                ) : storageAdmin ? (
                  <Button color="secondary" onClick={handleSubmitWorker}>
                    {t("login.accessWorker")}
                  </Button>
                ) : (
                  <>
                    <Button color="primary" onClick={handleSubmitAdmin}>
                      {t("login.accessAdmin")}
                    </Button>
                    <Button color="secondary" onClick={handleSubmitWorker}>
                      {t("login.accessWorker")}
                    </Button>
                  </>
                )}
                <ErrorMessage error={error} />
              </FormGroup>
            </Form>
          </Container>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
