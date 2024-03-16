import { urlApi } from "../ApiURL";

export async function UpdatePasswordEmailApi(url, passwd) {
  const response = await fetch(`${urlApi}/api/forgotPasswd/update`, {
    method: "PUT",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, passwd }),
  });
  const data = await response.json();
  return data;
}
