import React from "react";
import { Navigate } from "react-router-dom";
import ShowTable from "./ShowTables/ShowTable";
import CreateTable from "./CreateTable/CreateTable";

export const ManageTables = ({ authorized }) => {
  authorized = sessionStorage.getItem("admin");
  return (
    <>
      {authorized ? (
        <div className="my-element">
          <ShowTable />
          <CreateTable />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
