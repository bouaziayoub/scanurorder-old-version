import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import {
  UploadImgProductApi,
  UploadImageApi,
  ShowPicProductApi,
} from "../../../../../api/exportApi";
import { useTranslation } from "react-i18next";

const ModalUploadPictures = (props) => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [picUrl, setPicUrl] = useState(null);
  const idProduct = props.id;

  useEffect(() => {
    async function getPicUrl() {
      const response = await ShowPicProductApi(idProduct);
      const urls = response.result.map((item) => item.url);
      setPicUrl(urls);
    }
    getPicUrl();
  }, [idProduct]);

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
    await UploadImgProductApi(idProduct, url);
    window.location.reload();
    handleClose();
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("product.uploadtile")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {picUrl &&
          picUrl.map((url) => (
            <img
              key={url}
              src={url}
              alt="Product"
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "40%",
                height: "auto",
                marginBottom: "10px",
              }}
            />
          ))}
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
        <Button variant="secondary" onClick={handleUploadPicture}>
          Subir archivo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUploadPictures;
