import React, { useState } from "react";
import ShowAllSchedule from "./ShowAllSchedule/ShowAllSchedule";
import ShowScheduleByName from "./ShowScheduleByName/ShowScheduleByName";
import DeleteSchedule from "./DeleteSchedule/DeleteSchedule";
import ActivateSchedule from "./ActivateSchedule/ActivateSchedule";

const ScheduleContainer = () => {
  const [selectedDay, setSelectedDay] = useState("");

  const handleDayChange = (event) => {
    const nameSchedule = event.target.value;
    setSelectedDay(nameSchedule);
  };

  return (
    <>
      <ShowAllSchedule handleDayChange={handleDayChange} />
      {selectedDay && <ShowScheduleByName nameSchedule={selectedDay} />}
      <div className="d-flex">
        {selectedDay && <DeleteSchedule nameSchedule={selectedDay} />}
        {selectedDay && <ActivateSchedule nameSchedule={selectedDay} />}
      </div>
    </>
  );
};

export default ScheduleContainer;
