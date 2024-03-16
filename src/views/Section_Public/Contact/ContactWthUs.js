import "./ContactWitUs.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Import API
import { ContactUsAPi } from "../../../api/exportApi";
// Import getCookie
import {
  getCookie,
  validateEmail,
  validateName,
} from "../../../utils/exportUtils";
import {
  Input,
  TextArea,
  ErrorMessage,
  Form,
} from "../../../components/exportComponents";
import { Alert } from "react-bootstrap";

const ContactWthUs = ({ authorized }) => {
  const { t } = useTranslation();
  const tokenAdmin = sessionStorage.getItem("admin");
  const tokenWroker = sessionStorage.getItem("worker");
  const tokenLogin = getCookie("login");

  authorized = tokenAdmin || tokenWroker || tokenLogin;
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  async function handleSubmit(e) {
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
    } else if (msg === "") {
      setError(t("errors.required") + "MSG");
    } else {
      await ContactUsAPi(name, surName, email, msg);
      setError("");
      setShowSuccessMessage(true);
    }
  }
  return (
    <>
      {!authorized ? (
        <div className="">
          <Form>
            <h2 className=" mb-4 text-uppercase">{t("contact.h2")}</h2>
            <div className="row mt-5">
              <div className="form-group col-6">
                <Input
                  placeholder={t("contact.name")}
                  value={name}
                  onChange={setName}
                />
              </div>
              <div className="form-group col-6">
                <Input
                  placeholder={t("contact.surname")}
                  value={surName}
                  onChange={setSurName}
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <Input
                placeholder={t("contact.email")}
                value={email}
                onChange={setEmail}
              />
            </div>
            <div className="form-group mt-3">
              <TextArea
                placeholder={t("contact.message")}
                value={msg}
                onChange={setMsg}
              />
            </div>
            <button
              type="btn"
              className="btn btn-primary mt-3"
              id="send"
              onClick={handleSubmit}
            >
              {t("contact.send")}
            </button>
            <ErrorMessage error={error} />
            {showSuccessMessage && (
              <Alert variant="success">{t("contact.msgSuccess")}</Alert>
            )}
          </Form>
        </div>
      ) : (
        <Navigate to="/gestionAdmin" />
      )}
    </>
  );
};

export default ContactWthUs;
