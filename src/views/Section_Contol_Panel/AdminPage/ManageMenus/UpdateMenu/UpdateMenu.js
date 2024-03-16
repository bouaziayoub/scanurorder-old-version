import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ModalUpdateMenu from "./ModalUpdateMenu";
const UpdateMenu = ({ id, name }) => {
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
      <div className="">
        <button className="btn btn-sm btn-outline-primary" onClick={handleOpenModal}>
        {t("button.edit")}
        </button>
      </div>
      <ModalUpdateMenu
        show={showModal}
        onClose={handleCloseModal}
        id={id}
        name={name}
      />
    </div>
  );
};


export default UpdateMenu;
