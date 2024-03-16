import React from "react";
import { Navigate } from "react-router-dom";

import ShowCategory from "./ShowCategories/ShowCategories";
import CreateCategory from "./CreateCategory/CreateCategory";

export const ManageCategories = ({ authorized }) => {
  authorized = sessionStorage.getItem("admin");
  return (
    <>
      {authorized ? (
        <div
          className="my-element"
        >
          <ShowCategory />
          <CreateCategory />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
