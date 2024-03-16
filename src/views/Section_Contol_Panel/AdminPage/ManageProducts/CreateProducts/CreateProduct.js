import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ModalCreateTable from "./ModalCreateProducts";
const CreateProduct = () => {
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
        <button className="btn btn-primary" onClick={handleOpenModal}>
        {t("button.create") + t("product.product")}
        </button>
      </div>

      <ModalCreateTable show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default CreateProduct;
