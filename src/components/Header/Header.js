// Function component to show the Header
import React from "react";
import "./Header.css";

// He importado las Funcciones necesarios para poder navigar entre los componentes en la clase react-router-dom.

import ChangeLanguage from "./ChangeLanguage";

// Aqui estoy importando El logo.
import logo from "../../assets/images/Logo_order_now/CIRCLE.png";
import HeaderValidation from "./HeaderValidation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" style={{ width: "auto", height: "80px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto " style={{cursor: "pointer"}}><HeaderValidation/><ChangeLanguage /></ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
