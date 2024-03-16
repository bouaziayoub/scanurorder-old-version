import React, { useState, useEffect } from "react";
import { ShowAllSchedulesApi } from "../../../../../../../api/exportApi";
import ShowIsOpen from "../../../ShowInformation/ShowIsOpen/ShowIsOpen";
import { useTranslation } from "react-i18next";

const ShowAllSchedule = ({ handleDayChange }) => {
  const { t } = useTranslation();

  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ShowAllSchedulesApi();
      setSchedules(data);
    }
    fetchData();
  }, []);

  // Filter timetables to delete double names
  const filteredSchedules = schedules.filter(
    (schedule, index, self) =>
      index === self.findIndex((s) => s.name === schedule.name)
  );
  // Filter active schedules
  const activeSchedules = filteredSchedules.filter(
    (schedule) => schedule.is_active === 1
  );

  return (
    <div className="text-white">
      {activeSchedules.length > 0 ? (
        activeSchedules.map((schedule) => (
          <div key={schedule.id_schedule}>
            <h4>
              {t("info.active")}
              <b className="text-success">{schedule.name}</b>
            </h4>
            <ShowIsOpen />
            <p>
              {t("info.opnTime")}: {schedule.open_time}
            </p>
            <p>
              {t("info.clsTime")}:
              {schedule.close_time
                ? schedule.close_time < "23:59"
                  ? schedule.close_time
                  : "+00:00"
                : "+00:00"}
            </p>
            {/* Add other properties here */}
          </div>
        ))
      ) : (
        <h1 className="text-center m-5 text-danger">{t("info.noActiveSchedules")}</h1>
      )}

      <div className="text-white p-4 float-end w-25">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleDayChange}
        >
          <option value="">{t("info.selectTime")}</option>
          {filteredSchedules.map((schedule) => (
            <option key={schedule.id_schedule} value={schedule.name}>
              {schedule.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShowAllSchedule;
