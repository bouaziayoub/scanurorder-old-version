import React from "react";
import UpdateInformation from "./UpdateInformation/UpdateInformation";
import { getCookie } from "../../../../utils/exportUtils";
import { Navigate } from "react-router-dom";
import ShowPicturesEstablishment from "./ShowPicturesEstablishment/ShowPicturesEstablishment";
import { ManageSchedule } from "./ManageSchedule/ManageSchedule";

export const InformationSetting = ({ authorized }) => {
  authorized = getCookie("login");

  return (
    <>
      {authorized ? (
        <>
          <div className="my-element">
            <UpdateInformation />
          </div>
          <div className="my-element">
            <ShowPicturesEstablishment />
          </div>
          <div className="my-element">
            <ManageSchedule />
          </div>

        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
