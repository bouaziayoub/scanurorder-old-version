import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ModalCreateMenu from "./ModalCreateMenu";
const CreateMenu = () => {
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
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mt-4" onClick={handleOpenModal}>
          {t("button.create") + t("menu.menu")}
        </button>
      </div>
      <ModalCreateMenu show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default CreateMenu;
