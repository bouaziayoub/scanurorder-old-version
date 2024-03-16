import React, { useState } from "react";
import ModalGenerateQrTable from "./ModalGenerateQrTable";
import { useTranslation } from "react-i18next";
const GenerateQrTable = ({ id, table_number, capacity }) => {
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
      <button
        className="btn btn-sm btn-outline-light"
        onClick={handleOpenModal}
      >
        {t("table.qr")}
      </button>
      <ModalGenerateQrTable
        show={showModal}
        onClose={handleCloseModal}
        id={id}
        table_number={table_number}
        capacity={capacity}
      />
    </div>
  );
};

export default GenerateQrTable;
