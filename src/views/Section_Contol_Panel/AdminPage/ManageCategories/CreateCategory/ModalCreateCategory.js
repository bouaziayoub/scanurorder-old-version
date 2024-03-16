import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  CreateCategoryApi,
  ShowCategoryApi,
} from "../../../../../api/exportApi";
import { validateName } from "../../../../../utils/Validations";
import { ErrorMessage } from "../../../../../components/exportComponents";

import { useTranslation } from "react-i18next";

function ModalCreateCategory(props) {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setName("");
    props.onClose();
  };

  async function handleCreate() {
    const categories = await ShowCategoryApi();
    if (name !== "") {
      const nameCategoryExists = categories.some((category) => {
        return category.name === name;
      });
      if (nameCategoryExists) {
        setError(t("errors.existe"));
      } else if (!validateName(name)) {
        setError(t("errors.name"));
      } else {
        await CreateCategoryApi(name);
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
        <Modal.Title>{t("button.create") + t("category.category")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formname">
            <Form.Label>{t("form.name") + t("category.category")}: </Form.Label>
            <Form.Control
              placeholder={
                t("form.input") + t("form.name") + t("category.category")
              }
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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

export default ModalCreateCategory;
