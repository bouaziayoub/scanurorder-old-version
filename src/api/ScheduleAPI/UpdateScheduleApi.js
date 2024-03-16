import { urlApi } from "../ApiURL";

export async function UpdateScheduleApi(id, name, day, open, close) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");
  const response = await fetch(`${urlApi}/api/schedule/update/${id}`, {
    method: "PATCH",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ name, day, open, close }),
  });
  const data = await response.json();
  return data;
}
