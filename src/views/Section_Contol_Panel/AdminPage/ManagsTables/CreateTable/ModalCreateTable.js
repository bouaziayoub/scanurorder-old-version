import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { CreateTableApi, ShowTableApi } from "../../../../../api/exportApi";
import { validateInteger } from "../../../../../utils/Validations";
import { ErrorMessage } from "../../../../../components/exportComponents";
import { useTranslation } from "react-i18next";

function ModalCreateTable(props) {
  const { t } = useTranslation();

  const [numberTable, setNumberTable] = useState("");
  const [capacity, setCapacity] = useState("");
  const numTable = parseInt(numberTable);
  const [error, setError] = useState("");

  const handleClose = () => {
    setNumberTable("");
    setCapacity("");
    props.onClose();
  };

  async function handleCreate() {
    const tables = await ShowTableApi();

    if (numTable !== "" && capacity !== "") {
      const numTableExists = tables.some((table) => {
        return table.table_number === numTable;
      });

      // Validate if it is a correct number
      if (!validateInteger(numTable)) {
        setError(t("errors.numTable"));
      } else if (!validateInteger(capacity)) {
        setError(t("errors.capacity"));
      } else if (numTableExists) {
        setError(t("errors.existe"));
      } else {
        await CreateTableApi(numTable, capacity);
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
        <Modal.Title>{t("button.create") + t("table.table")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formnumberTable">
            <Form.Label>Nº {t("table.table")}</Form.Label>
            <Form.Control
              placeholder={
                t("form.input") + t("form.number") + t("table.table")
              }
              type="text"
              value={numberTable}
              onChange={(e) => setNumberTable(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formcapacity">
            <Form.Label>{t("table.capacity")} </Form.Label>
            <Form.Control
              placeholder={
                t("form.input") + t("form.number") + t("table.capacity")
              }
              type="text"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
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

export default ModalCreateTable;
