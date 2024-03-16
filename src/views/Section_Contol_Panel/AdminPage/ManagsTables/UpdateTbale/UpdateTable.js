import React, { useState } from "react";
import ModalUpdateTable from "./ModalUpdateTable";
import { useTranslation } from "react-i18next";
const UpdateTable = ({ id, table_number, capacity, isAvailable }) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button
        className="btn btn-sm btn-outline-primary"
        onClick={handleOpenModal}
      >
        {t("button.edit")}
      </button>
      <ModalUpdateTable
        show={showModal}
        onClose={handleCloseModal}
        id={id}
        table_number={table_number}
        capacity={capacity}
        isAvailable={isAvailable}
      />
    </div>
  );
};

export default UpdateTable;
