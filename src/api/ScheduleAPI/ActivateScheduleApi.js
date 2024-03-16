import { urlApi } from "../ApiURL";

async function ActivateScheduleApi(name) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");

  const response = await fetch(`${urlApi}/api/schedule/active/${name}`, {
    method: "PUT",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await response.json();
  return data;
}

export default ActivateScheduleApi;
