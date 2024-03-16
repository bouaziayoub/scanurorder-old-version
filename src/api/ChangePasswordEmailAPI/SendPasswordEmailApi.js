import { urlApi } from "../ApiURL";

export async function SendPasswordEmailApi(email) {
  const response = await fetch(`${urlApi}/api/forgotPasswd/send`, {
    method: "POST",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  return data;
}
