import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { CreateScheduleApi } from "../../../../../../api/exportApi";
import { useTranslation } from "react-i18next";
import { validateName } from "../../../../../../utils/Validations";
import { ErrorMessage } from "../../../../../../components/exportComponents";

function ModalCreateSchedule(props) {
  const { t } = useTranslation();
  const daysOfWeek = [
    { name: t("day.mon"), isChecked: false, value: 1 },
    { name: t("day.tue"), isChecked: false, value: 2 },
    { name: t("day.wed"), isChecked: false, value: 3 },
    { name: t("day.thu"), isChecked: false, value: 4 },
    { name: t("day.fri"), isChecked: false, value: 5 },
    { name: t("day.sat"), isChecked: false, value: 6 },
    { name: t("day.sun"), isChecked: false, value: 7 },
  ];

  const [name, setName] = useState("");
  const [days, setDays] = useState(daysOfWeek);
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setName("");
    setDays(daysOfWeek);
    setOpenTime("");
    setCloseTime("");
    props.onClose();
  };

  async function handleCreate() {
    const selectedDays = days
      .filter((day) => day.isChecked)
      .map((day) => day.value)
      .join(",");
    if (openTime !== "" && closeTime !== "") {
      if (!validateName(name)) {
        setError(t("errors.name"));
      } else {
        await CreateScheduleApi(
          name,
          selectedDays,
          openTime,
          closeTime
        );
        window.location.reload();
        handleClose();
      }
    } else {
      setError(t("errors.emptyFields"));
    }
  }

  function handleDayChange(index) {
    const newDays = [...days];
    newDays[index].isChecked = !newDays[index].isChecked;
    setDays(newDays);
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("button.create") + t("info.title3")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formname">
            <Form.Label>{t("form.name")}: </Form.Label>
            <Form.Control
              placeholder={t("form.input") + t("form.name")}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formname">
            <Form.Label>{t("info.days")}: </Form.Label>
            {days.map((day, index) => (
              <Form.Check
                key={day.name}
                label={day.name}
                checked={day.isChecked}
                onChange={() => handleDayChange(index)}
              />
            ))}
          </Form.Group>
          <Form.Group controlId="formOpen">
            <Form.Label>{t("info.open")}: </Form.Label>
            <Form.Control
              type="time"
              value={openTime}
              onChange={(e) => setOpenTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formClose">
            <Form.Label>{t("button.close")}: </Form.Label>
            <Form.Control
              type="time"
              value={closeTime}
              onChange={(e) => setCloseTime(e.target.value)}
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

export default ModalCreateSchedule;
