import React, { useState } from "react";

import { ChangePasswordEmailModal } from "./ChangePasswodEmailModal";

const ChangePasswodEmail = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>

      <ChangePasswordEmailModal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default ChangePasswodEmail;
