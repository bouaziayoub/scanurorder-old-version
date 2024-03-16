import React from "react";
import { ActivateScheduleApi } from "../../../../../../../api/exportApi";
import { useTranslation } from "react-i18next";
const ActivateSchedule = ({ nameSchedule }) => {
  const { t } = useTranslation();

  async function HundelActivate() {
    await ActivateScheduleApi(nameSchedule);
    window.location.reload();
  }

  return (
    <>
      <button className="btn btn-sm btn-success" onClick={HundelActivate}>
        {t("info.activate")}
      </button>
    </>
  );
};
export default ActivateSchedule;
