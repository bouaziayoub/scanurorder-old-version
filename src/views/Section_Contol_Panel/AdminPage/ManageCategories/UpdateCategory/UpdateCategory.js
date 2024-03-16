import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ModalUpdateCategory from "./ModalUpdateCategory";
const UpdateCategory = ({id, name}) => {
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
      <div className="">
        <button className="btn btn-sm btn-outline-primary" onClick={handleOpenModal}>
        {t("button.edit")}
        </button>
      </div>
      <ModalUpdateCategory
        show={showModal}
        onClose={handleCloseModal}
        id={id}
        name={name}
      />
    </div>
  );
};


export default UpdateCategory;
