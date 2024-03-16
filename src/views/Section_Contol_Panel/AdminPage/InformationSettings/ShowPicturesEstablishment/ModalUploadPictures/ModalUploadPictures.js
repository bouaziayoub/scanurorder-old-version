import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import {
  UploadImagesEstablishmentApi,
  UploadImageApi,
} from "../../../../../../api/exportApi";

const ModalUploadPictures = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClose = () => {
    setSelectedFile(null);
    props.onClose();
  };

  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  async function handleUploadPicture() {
    const response = await UploadImageApi(selectedFile);

    const responseBody = await response.json();

    const url = responseBody.url;

    const id = localStorage.getItem("id_establishment");
    await UploadImagesEstablishmentApi(id, url);

    // window.location.reload();
    handleClose();
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Seleccionar archivo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="file"
          name="logo"
          id="logo"
          onChange={handleImageChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleUploadPicture}>
          Subir archivo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUploadPictures;
