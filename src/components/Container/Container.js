import "./Container.css";
import React from "react";

import { Route, Routes } from "react-router-dom";

import {
  Home,
  Register,
  Login,
  PuntosPage,
  ContactWthUs,
  WelcomePage,
  ChangePasswodEmail,
  ManageUsers,
  Kitchen,
  OrdersTable,
  ChangePassword,
  ManageTables,
  ManageProducts,
  ManageMenus,
  GenerateQR,
  FormChangePasswordEmail,
  ShowInformation,
  InformationSetting,
  ManageCategories,
  OrderQr,
  RegisterUser
} from "../../views/exportViews";
import { SuccessMsg, NotFound } from "../exportComponents";

// import ChangePasswodEmail from "../Section_Public/ChangePasswordByEmail/ChangePasswodEmail";


const Container = () => {
  return (
    // <div className="container bg-light p-3">
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Home authorized={true} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/puntos" element={<PuntosPage authorized={false} />} />
          <Route path="/:ruta" element={<OrderQr />} />
          <Route
            path="/contact"
            element={<ContactWthUs authorized={false} />}
          />
          <Route path="/register" element={<Register authorized={false} />} />
          <Route
            path="/changePasswordEmail"
            element={<ChangePasswodEmail authorized={false} />}
          />
          {/* The routes be authorized worker */}
          <Route
            path="/ordersTable"
            element={<OrdersTable authorized={false} />}
          />
          <Route path="/kitchen" element={<Kitchen authorized={false} />} />

          <Route
            path="/welcomePage"
            element={<WelcomePage authorized={false} />}
          />

          <Route path="/success" element={<SuccessMsg authorized={false} />} />

          {/* The routes be authorized Admin */}
          <Route
            path="/products"
            element={<ManageProducts authorized={false} />}
          />
          <Route
            path="/tableAdmin"
            element={<ManageTables authorized={false} />}
          />
          <Route
            path="/infoSetting"
            element={<InformationSetting authorized={false} />}
          />
           <Route
            path="/workers"
            element={<RegisterUser authorized={false} />}
          />
          <Route
            path="/information"
            element={<ShowInformation authorized={false} />}
          />
          <Route
            path="/gestionAdmin"
            element={<ManageUsers authorized={false} />}
          />
          <Route
            path="/changePassword"
            element={<ChangePassword authorized={false} />}
          />
          <Route
            path="/forgotPasswd/reset/:id"
            element={<FormChangePasswordEmail authorized={false} />}
          />
          <Route
            path="/menuAdmin"
            element={<ManageMenus authorized={false} />}
          />
          <Route
            path="/category"
            element={<ManageCategories authorized={false} />}
          />
          <Route
            path="/generateQR"
            element={<GenerateQR authorized={false} />}
          />

          {/* <Route
            path="/*"
            element={<NotFound/>}
          /> */}
        </Routes>
      </div>
    </>
  );
};

export default Container;
