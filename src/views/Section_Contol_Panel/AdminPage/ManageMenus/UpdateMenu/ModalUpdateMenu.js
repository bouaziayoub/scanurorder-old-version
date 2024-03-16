import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { UpdateMenuApi } from "../../../../../api/exportApi";
import { validateName } from "../../../../../utils/Validations";
import { ErrorMessage } from "../../../../../components/exportComponents";
import { useTranslation } from "react-i18next";

function ModalUpdateMenu(props) {
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
      await UpdateMenuApi(props.id, name);
      window.location.reload();
      handleClose();
    }
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("button.edit") + t("menu.menu")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formname">
            <Form.Label>{t("form.name")} {t("menu.menu")}: </Form.Label>
            <Form.Control
              placeholder={t("form.input") + t("form.name") + t("menu.menu")}
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

export default ModalUpdateMenu;
