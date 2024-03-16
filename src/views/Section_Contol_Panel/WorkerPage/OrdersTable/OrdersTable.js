import "./OrdersTable.css";
import React from "react";
import { Navigate } from "react-router-dom";

import ManageOrders from "../ManageOrders/ManageOrders";


export const OrdersTable = ({ authorized }) => {
  authorized = sessionStorage.getItem("worker");
  // Pagina para la visualizacion de todas las mesas con un pedido a realizar

  return (
    <>
      {authorized ? (
        <div className="my-element text-light">
          <ManageOrders />
        </div>
      ) : (
        <Navigate to="/gestionAdmin" />
      )}
    </>
  );
};
