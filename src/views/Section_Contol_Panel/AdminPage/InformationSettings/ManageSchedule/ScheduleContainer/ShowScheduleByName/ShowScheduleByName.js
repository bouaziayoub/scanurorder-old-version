import React, { useEffect, useState } from "react";
import ScheduleTable from "./ScheduleTable";
import { ShowSchedulesByNameApi } from "../../../../../../../api/exportApi";

const ShowScheduleByName = ({ nameSchedule }) => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (nameSchedule !== undefined) {
        const data = await ShowSchedulesByNameApi(nameSchedule);
        setSchedules(data);
      }
    }
    fetchData();
  }, [nameSchedule]);

  return (
    <>
      {schedules.length > 0 && (
        <div className="container"  style={{ height: "auto", overflow: "auto" }}>
          <ScheduleTable schedules={schedules} />
        </div>
      )}
    </>
  );
};

export default ShowScheduleByName;
