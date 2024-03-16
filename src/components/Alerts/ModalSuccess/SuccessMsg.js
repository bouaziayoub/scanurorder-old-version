import "./SuccessMsg.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// Import Utils
import { getCookie } from "../../../utils/exportUtils";
import ModalSuccess from "./ModalSuccess";

const SuccessMsg = ({ authorized }) => {
  const [showModal, setShowModal] = useState(true);
  authorized = getCookie("login");
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {authorized ? (
        <div>
          <ModalSuccess
            accessModal={true}
            show={showModal}
            closeModal={closeModal}
          />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default SuccessMsg;
