import React from "react";
import { Navigate } from "react-router-dom";
import ShowProducts from "./ShowProducts/ShowProducts";
import CreateProduct from "./CreateProducts/CreateProduct";

export const ManageProducts = ({ authorized }) => {
  authorized = sessionStorage.getItem("admin");

  return (
    <>
      {authorized ? (
        <div className="my-element">
          <ShowProducts />
          <CreateProduct />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
