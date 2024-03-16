import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ModalCreateCategory from "./ModalCreateCategory";
const CreateCategory = () => {
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
          {t("button.create") + t("category.category")}
        </button>
      </div>
      <ModalCreateCategory show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default CreateCategory;
