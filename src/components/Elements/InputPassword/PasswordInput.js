import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PasswordInput.css";

import "../../../assets/i18/i18n";
import { useTranslation } from "react-i18next";

const PasswordInput = (props) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    props.onChange(event.target.value); // enviar el valor al componente Login
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="input-group mb-2 mt-2">
        <input
          style={{ marginRight: "5px" }}
          type={showPassword ? "text" : "password"}
          className="form-control rounded"
          placeholder={props.placeholder || t("login.password")}
          value={password}
          onChange={handlePasswordChange}
          autoComplete="new-password"
        />
        <div className="input-group-append">
          <span
            id="showPassword"
            className="input-group-text mt-1"
            onClick={toggleShowPassword}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </span>
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
