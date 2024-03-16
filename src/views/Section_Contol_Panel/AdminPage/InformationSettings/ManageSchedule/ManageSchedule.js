import React from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CreateSchedule from "./CreateSchedule/CreateSchedule";
import ScheduleContainer from "./ScheduleContainer/ScheduleContainer";

export const ManageSchedule = ({ authorized }) => {
  const { t } = useTranslation();

  authorized = sessionStorage.getItem("admin");

  return (
    <>
      {authorized ? (
        <div className="my-element">
          <h2 className=" text-light text-center text-uppercase p-3 m-4">
            {t("info.title3")}
          </h2>
          <CreateSchedule />
          <ScheduleContainer />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
