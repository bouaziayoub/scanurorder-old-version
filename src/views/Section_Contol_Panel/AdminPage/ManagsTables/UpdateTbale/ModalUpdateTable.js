import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { UpdateTableApi } from "../../../../../api/exportApi";
import { validateInteger } from "../../../../../utils/Validations";
import { ErrorMessage } from "../../../../../components/exportComponents";
import { useTranslation } from "react-i18next";

function ModalUpdateTable(props) {
  const { t } = useTranslation();

  const [numberTable, setNumberTable] = useState(props.table_number);
  const [capacity, setCapacity] = useState(props.capacity);
  const [isAvailable, setIsAvailable] = useState(props.isAvailable);
  const [error, setError] = useState("");

  const handleClose = () => {
    setNumberTable("");
    setCapacity("");
    setIsAvailable(0);
    props.onClose();
  };

  function handleRadioChange(event) {
    if (event.target.id === "available-yes") {
      setIsAvailable(1);
    } else {
      setIsAvailable(0);
    }
  }
  async function handleUpdate() {
    // Validate if it is a correct number
    if (!validateInteger(numberTable)) {
      setError(t("errors.numTable"));
    } else if (!validateInteger(capacity)) {
      setError(t("errors.capacity"));
    } else {
      await UpdateTableApi(props.id, numberTable, capacity, isAvailable);
      window.location.reload();
      handleClose();
    }
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("button.edit") + t("table.table")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formnumberTable">
            <Form.Label>Nº {t("table.table")}: </Form.Label>
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
            <Form.Label>{t("table.capacity")}: </Form.Label>
            <Form.Control
              placeholder={
                t("form.input") + t("form.number") + t("table.capacity")
              }
              type="text"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
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
          {t("button.cancel")}
        </Button>
        <Button variant="secondary" onClick={handleUpdate}>
          {t("button.edit")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateTable;
