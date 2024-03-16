// *? ZI used this page to implement a component for every <ul>
// *? https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react

import React from "react";

import HdearBeforeLogin from "./HdearBeforeLogin";

import { getCookie } from "../../utils/Cookies/index";
import HeaderLoginAdmin from "./HeaderLoginAdmin";
import HeaderLoginWorker from "./HeaderLoginWorder";

const HeaderValidation = () => {
  const token = getCookie("login");
  const adminSession = sessionStorage.getItem("admin");
  const workerSession = sessionStorage.getItem("worker");
  if (adminSession === "true") {
    return (
      <>
        <HeaderLoginAdmin />
      </>
    );
  } else if (workerSession === "true" || token === "true") {
    return (
      <>
        <HeaderLoginWorker />
      </>
    );
  } else {
    return (
      <>
        <HdearBeforeLogin />
      </>
    );
  }
};

export default HeaderValidation;
