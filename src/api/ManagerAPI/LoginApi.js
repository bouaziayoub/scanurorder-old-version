import { setCookie } from "../../utils/Cookies";
import { urlApi } from "../ApiURL";

const apiUrl = `${urlApi}/api/managers/`;

// *? General login that serves for both admin and worker.
export const LoginApi = async (email, password) => {
  const response = await fetch(apiUrl + "login", {
    method: "POST",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  const token = data.token;
  if (token) {
    localStorage.setItem("tkn", JSON.stringify(data.token));
    setCookie("login", true);
  }
  return token;
};

export const LoginUsersApi = async (email, password, token, userType) => {
  let endpoint = "";
  if (userType === "admin") {
    endpoint = "loginAdmin";
  } else if (userType === "worker") {
    endpoint = "loginWorker";
  } else {
    throw new Error("Invalid user type");
  }

  const response = await fetch(apiUrl + endpoint, {
    method: "POST",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, token }),
  });

  const data = await response.json();
  return data;
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem("user");
};

// ! I HAVE TO REUSE THIS FUNCTION LOCAL STORAGE user
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
