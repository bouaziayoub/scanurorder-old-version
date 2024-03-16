import React, { useState, useEffect } from "react";
import {
  ShowAllSchedulesApi,
  ShowIsOpenApi,
} from "../../../../../../api/exportApi";
import { useTranslation } from "react-i18next";

const ShowIsOpen = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState("");

  useEffect(() => {
    async function fetchData() {
      const schedules = await ShowAllSchedulesApi();
      if (schedules.length > 0) {
        const data = await ShowIsOpenApi();
        if (data.result === "Closed") {
          setIsOpen(t("info.close"));
        } else {
          setIsOpen(t("info.open"));
        }
      }
    }

    fetchData();
  }, [t]);

  const colorClass =
    isOpen === "Open" || isOpen === "Abierto" || isOpen === "Obert"
      ? "text-success"
      : "text-danger";

  return (
    <div>
      <p>
        {t("form.status")}:<span className={colorClass}> {isOpen}</span>
      </p>
    </div>
  );
};

export default ShowIsOpen;
