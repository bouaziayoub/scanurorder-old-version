import { setCookie } from "../../utils/Cookies";
import { urlApi } from "../ApiURL";

export async function RegisterApi(first_name, last_name, email, password) {
  const response = await fetch(`${urlApi}/api/managers/register`, {
    method: "POST",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name, last_name, email, password }),
  });
  const data = await response.json();

  if (!data.errors) {
    localStorage.setItem("tkn", JSON.stringify(data.token));
    setCookie("login", true);
  }
  return data;
}
