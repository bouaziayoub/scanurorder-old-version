import React, { useState } from "react";
import "./CreateSchedule.css";
import ModalCreateSchedule from "./ModalCreateSchedule";
import { useTranslation } from "react-i18next";
const CreateSchedule = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleCloseModal = () => {

    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="schedule_section d-flex justify-content-center">
      <ModalCreateSchedule show={showModal} onClose={handleCloseModal} />
      <div className="btn-create-schedule">
        <button className="btn btn-primary" onClick={handleOpenModal}>
        {t("button.create") + t("info.title3")}
        </button>
      </div>
    </div>
  );
};

export default CreateSchedule;
