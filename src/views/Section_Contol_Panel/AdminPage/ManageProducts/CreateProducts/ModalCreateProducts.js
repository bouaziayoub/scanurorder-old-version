import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  CreateProductApi,
  ShowProductsApi,
} from "../../../../../api/exportApi";
import {
  validateDescription,
  validateFloat,
  validateName,
} from "../../../../../utils/Validations";
import { ErrorMessage } from "../../../../../components/exportComponents";
import { useTranslation } from "react-i18next";

function ModalCreateProduct(props) {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setName("");
    setPrice("");
    setDescription("");
    props.onClose();
  };
  async function handleCreate() {
    const products = await ShowProductsApi();
    if (name !== "" && price !== "" && description !== "") {
      const nameProductExists = products.some((product) => {
        return product.name === name;
      });

      if (nameProductExists) {
        setError(t("errors.existe"));
      } else if (!validateName(name)) {
        setError(t("errors.name"));
      } else if (!validateFloat(price)) {
        setError(t("errors.price"));
      } else if (!validateDescription(description)) {
        setError(t("errors.description"));
      } else {
        await CreateProductApi(name, price, description);
        window.location.reload();
        handleClose();
      }
    } else {
      setError(t("errors.emptyFields"));
    }
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("button.create") + t("product.product")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formname">
            <Form.Label>
              {t("form.name")} {t("product.product")}:
            </Form.Label>
            <Form.Control
              placeholder={
                t("form.input") + t("form.name") + t("product.product")
              }
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formn">
            <Form.Label>{t("form.price")}: </Form.Label>
            <Form.Control
              placeholder={
                t("form.input") + t("form.price") + t("product.product")
              }
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="form">
            <Form.Label>{t("form.description")}: </Form.Label>
            <Form.Control
              placeholder={
                t("form.input") + t("form.description") + t("product.product")
              }
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <ErrorMessage error={error} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          {t("button.cancel")}
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          {t("button.create")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCreateProduct;
