import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { UpdateCategoryApi } from "../../../../../api/exportApi";
import { useTranslation } from "react-i18next";
import { validateName } from "../../../../../utils/Validations";
import { ErrorMessage } from "../../../../../components/exportComponents";

function ModalUpdateCategory(props) {
  const { t } = useTranslation();

  const [name, setName] = useState(props.name);
  const [error, setError] = useState("");

  const handleClose = () => {
    setName("");
    props.onClose();
  };

  async function handleUpdate() {
    if (!validateName(name)) {
      setError(t("errors.name"));
    } else {
      await UpdateCategoryApi(props.id, name);
      window.location.reload();
      handleClose();
    }
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {t("button.edit")} {t("category.category")}
        </Modal.Title>
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
        <Button variant="secondary" onClick={handleUpdate}>
          {t("button.edit")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateCategory;
