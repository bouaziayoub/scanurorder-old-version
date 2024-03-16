import "./WelcomePage.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ModalWelcome from "./ModalWelcome";
// Import Utils
import { getCookie } from "../../../utils/exportUtils";

const WelcomePage = ({ authorized }) => {
  const [showModal, setShowModal] = useState(true);
  authorized = getCookie("login");
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {authorized ? (
        <div>
          <ModalWelcome show={showModal} closeModal={closeModal} />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default WelcomePage;
