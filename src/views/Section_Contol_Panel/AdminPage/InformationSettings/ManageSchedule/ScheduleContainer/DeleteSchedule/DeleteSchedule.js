import React, { useState } from "react";
import { DeleteScheduleByNameApi } from "../../../../../../../api/exportApi";
import { useTranslation } from "react-i18next";
import DeleteAlert from "../../../../../../../components/Alerts/DeleteAlert/DeleteAlert";
const DeleteSchedule = ({ nameSchedule }) => {
  const { t } = useTranslation();
  const [nameToDelete, setNameToDelete] = useState("");
  const [, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    setNameToDelete(nameSchedule);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    await DeleteScheduleByNameApi(nameToDelete);
    setConfirmDelete(false);
    setNameToDelete(null);
    window.location.reload();
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setNameToDelete(null);
  };
  return (
    <>
      {/* <button className="btn btn-danger" onClick={HundelDelete}>
        {t("button.del") + t("info.title3")}
      </button> */}
      <DeleteAlert
        message={t("info.title3") + " " + nameSchedule}
        onClick={handleDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};

export default DeleteSchedule;
