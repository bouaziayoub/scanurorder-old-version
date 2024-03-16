import { setCookie } from "../../utils/Cookies";
import { urlApi } from "../ApiURL";

export async function RegisterUserApi(first_name, last_name, email, password) {
  const response = await fetch(`${urlApi}/api/users/register`, {
    method: "POST",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ first_name, last_name, email, password }),
  });
  const data = await response.json();

  if (!data.errors) {
    localStorage.setItem("tknusr", JSON.stringify(data.token));
    setCookie("loginUser", true);
  }
  return data;
}
