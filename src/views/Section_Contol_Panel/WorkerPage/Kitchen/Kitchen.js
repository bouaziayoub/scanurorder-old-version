import React from "react";
import "./Kitchen.css";

import { Navigate } from "react-router-dom";

import ShowDetailsOrders from "../ManageOrders/ShowDetailsOrders/ShowDetailsOrders";

export const Kitchen = ({ authorized }) => {
  authorized = sessionStorage.getItem("worker");

  return (
    <>
      {authorized ? (
        <div className="my-element text-light">
          <ShowDetailsOrders />
        </div>
      ) : (
        <Navigate to="/gestionAdmin" />
      )}
    </>
  );
};
