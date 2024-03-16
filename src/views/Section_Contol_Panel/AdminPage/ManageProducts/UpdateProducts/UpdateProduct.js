import React, { useState } from "react";
import ModalUpdateProduct from "./ModalUpdateProducts";
import { useTranslation } from "react-i18next";
const UpdateProduct = ({ id, name, price, description, isAvailable }) => {
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
      <ModalUpdateProduct
        show={showModal}
        onClose={handleCloseModal}
        id={id}
        name={name}
        price={price}
        description={description}
        isAvailable={isAvailable}
      />
    </div>
  );
};

export default UpdateProduct;
