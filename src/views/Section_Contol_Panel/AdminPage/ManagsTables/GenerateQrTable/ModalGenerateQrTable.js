import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { qrTable } from "../../../../../api/QR-API/ApiGenerateQR";
function ModalGenerateQrTable(props) {
  const { t } = useTranslation();
  const url = qrTable(props.table_number);

  const handleClose = () => {
    props.onClose();
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {t("table.titleQr")}
          {props.table_number}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
        {t("button.close")}
        </Button>
        <Button variant="secondary" onClick={window.print}>
        {t("button.print")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalGenerateQrTable;
