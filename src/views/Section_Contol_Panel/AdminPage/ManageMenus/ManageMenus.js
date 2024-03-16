import React from "react";
import { Navigate } from "react-router-dom";

import ShowMenus from "./ShowMenu/ShowMenu";
import CreateMenu from "./CreateMenu/CreateMenu";

export const ManageMenus = ({ authorized }) => {
  authorized = sessionStorage.getItem("admin");
  return (
    <>
      {authorized ? (
        <div
          className="my-element"
        >
          <ShowMenus />
          <CreateMenu />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
