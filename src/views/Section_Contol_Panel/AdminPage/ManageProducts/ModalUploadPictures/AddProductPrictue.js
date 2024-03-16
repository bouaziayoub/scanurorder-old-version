import React, { useState } from "react";
import ModalUploadPictures from "./ModalUploadPictures";

const AddProductPrictue = ({ id }) => {
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
        Pictures
      </button>
      <ModalUploadPictures id={id} show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default AddProductPrictue;
