import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function DeleteAlert(props) {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    props.onClick();
    setShow(true);
  };

  const handleConfirm = () => {
    props.onConfirm();
    handleClose();
  };

  return (
    <div>
      <Button variant="btn btn-sm btn-danger" onClick={handleShow}>
        {t("button.del")}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("msgDelete.title")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t("msgDelete.text") + props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            {t("form.yes")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteAlert;
