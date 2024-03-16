import "./FormChangePassEmail.css";
import React, { useState } from "react";
import { UpdatePasswordEmailApi } from "../../../../api/exportApi";
import { validatePassword } from "../../../../utils/Validations";
import PasswordInput from "../../../../components/Elements/InputPassword/PasswordInput";
import { Container, Input, Form, FormGroup, Button } from "reactstrap";
import { ErrorMessage } from "../../../../components/exportComponents";
import { useTranslation } from "react-i18next";

const FormChangePasswordEmail = () => {
  const { t } = useTranslation();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const getUrl = document.location.href;
  const url = getUrl.replace("http://", "");

  //Validate the RepeatPassword Password fields if they coincide.
  function validateConfirmPassword(password, repeatPassword) {
    if (password !== repeatPassword) {
      return "Las contraseñas no coinciden";
    }
    return "";
  }
  async function handleSubmit(e) {
    e.preventDefault();
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
        await UpdatePasswordEmailApi(url, password);
        alert("You have changed the password correctly");
      }
    } else {
      setError(t("errors.emptyFields"));
    }
  }
  return (
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
  );
};

export default FormChangePasswordEmail;
