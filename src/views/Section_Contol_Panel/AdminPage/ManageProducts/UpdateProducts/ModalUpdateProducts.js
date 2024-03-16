import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { UpdateProductApi } from "../../../../../api/exportApi";
import {
  validateDescription,
  validateFloat,
  validateName,
} from "../../../../../utils/Validations";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "../../../../../components/exportComponents";

function ModalUpdateProduct(props) {
  const { t } = useTranslation();

  const [name, setName] = useState(props.name || "");
  const [price, setPrice] = useState(props.price || "");
  const [description, setDescription] = useState(props.description || "");
  const [isAvailable, setIsAvailable] = useState(props.is_available || false);
  const [error, setError] = useState("");

  const handleClose = () => {
    setName("");
    setPrice("");
    setDescription("");
    setIsAvailable(false);
    props.onClose();
  };
  function handleRadioChange(event) {
    if (event.target.id === "available-yes") {
      setIsAvailable("true");
    } else {
      setIsAvailable("false");
    }
  }
  async function handleUpdate() {
    if (!validateName(name)) {
      setError(t("errors.name"));
    } else if (!validateFloat(price)) {
      setError(t("errors.price"));
    } else if (!validateDescription(description)) {
      setError(t("errors.description"));
    } else {
      await UpdateProductApi(props.id, name, price, description, isAvailable);
      window.location.reload();
      handleClose();
    }
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("button.edit") + t("product.product")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formname">
            <Form.Label>
              {t("form.name")} {t("product.product")}:{" "}
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
          <Form.Group>
            <Form.Label>{t("form.availableQs")}</Form.Label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="available"
                  id="available-yes"
                  value="true"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="available-yes">
                  {t("form.yes")}
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="available"
                  id="available-no"
                  value="false"
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="available-no">
                  No
                </label>
              </div>
            </div>
          </Form.Group>
          <ErrorMessage error={error} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="secondary" onClick={handleUpdate}>
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateProduct;
