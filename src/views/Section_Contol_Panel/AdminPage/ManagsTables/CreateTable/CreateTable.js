import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ModalCreateTable from "./ModalCreateTable";
const CreateTable = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mt-4" onClick={handleOpenModal}>
        {t("button.create") + t("table.table")}
        </button>
      </div>
      <ModalCreateTable show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default CreateTable;
