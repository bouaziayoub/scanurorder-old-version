import React, { useState, useEffect } from "react";
import "./ScheduleTable.css";
import { useTranslation } from "react-i18next";

const ScheduleTable = ({ schedules }) => {
  const { t } = useTranslation();

  const daysOfWeek = [
    { en: "Monday", es: t("day.mon") },
    { en: "Tuesday", es: t("day.tue") },
    { en: "Wednesday", es: t("day.wed") },
    { en: "Thursday", es: t("day.thu") },
    { en: "Friday", es: t("day.fri") },
    { en: "Saturday", es: t("day.sat") },
    { en: "Sunday", es: t("day.sun") },
  ];

  const [openingHours, setOpeningHours] = useState([]);

  const [closingHours, setClosingHours] = useState([]);

  useEffect(() => {
    setOpeningHours(
      [...new Set(schedules.map((schedule) => schedule.open_time))].sort()
    );
    // Sort closing hours based on whether they are before or after noon.
    setClosingHours(
      [...new Set(schedules.map((schedule) => schedule.close_time))].sort(
        (a, b) => {
          const hourA = parseInt(a.split(":")[0]);
          const hourB = parseInt(b.split(":")[0]);
          if (hourA >= 13 && hourB < 13) {
            return -1;
          } else if (hourB >= 13 && hourA < 13) {
            return 1;
          } else {
            return hourA - hourB;
          }
        }
      )
    );

  }, [schedules]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          {daysOfWeek.map((day) => (
            <th key={day.en} scope="col">
              {day.es}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <td colSpan="8" className="text-success">
            {t("opening_hours")}
          </td>
        </tr>
        {openingHours.map((hour) => (
          <tr key={hour}>
            <th scope="row">{hour}</th>
            {daysOfWeek.map((day) => (
              <td
                key={`${day.en}-${hour}`}
                className={
                  schedules.find(
                    (schedule) =>
                      schedule.day === day.en && schedule.open_time === hour
                  )
                    ? "text-success"
                    : "emptyText"
                }
              >
                {schedules.find(
                  (schedule) =>
                    schedule.day === day.en && schedule.open_time === hour
                )
                  ? t("open")
                  : "-"}
              </td>
            ))}
          </tr>
        ))}
        <tr className="">
          <td colSpan="8" className="text-danger">
            {t("closing_hours")}
          </td>
        </tr>
        {closingHours.map((hour) => (
          <tr key={hour}>
            <th scope="row">{hour}</th>
            {daysOfWeek.map((day) => (
              <td
                key={`${day.en}-${hour}`}
                className={
                  schedules.find(
                    (schedule) =>
                      schedule.day === day.en && schedule.close_time === hour
                  )
                    ? "text-danger font-weight-bold"
                    : "emptyText"
                }
              >
                {schedules.find(
                  (schedule) =>
                    schedule.day === day.en && schedule.close_time === hour
                )
                  ? t("closed")
                  : "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
