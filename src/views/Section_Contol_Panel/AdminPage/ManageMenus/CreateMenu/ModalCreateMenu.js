import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { CreateMenuApi, ShowMenuApi } from "../../../../../api/exportApi";
import { ErrorMessage } from "../../../../../components/exportComponents";
import { validateName } from "../../../../../utils/Validations";
import { useTranslation } from "react-i18next";

function ModalCreateMenu(props) {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setName("");
    props.onClose();
  };

  async function handleCreate() {
    const menus = await ShowMenuApi();
    if (name !== "") {
      const nameMenuExists = menus.some((menu) => {
        return menu.name === name;
      });
      if (nameMenuExists) {
        setError(t("errors.existe"));
      } else if (!validateName(name)) {
        setError(t("errors.name"));
      } else {
        await CreateMenuApi(name);
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
        <Modal.Title> {t("button.create") + t("menu.menu")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formname">
            <Form.Label>
              {t("form.name")} {t("menu.menu")}:{" "}
            </Form.Label>
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
        <Button variant="primary" onClick={handleCreate}>
          {t("button.create")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCreateMenu;
