import { urlApi } from "../ApiURL";

export async function CreateTableApi(table_number, capacity) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");

  const response = await fetch(`${urlApi}/api/table/create`, {
    method: "POST",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ table_number, capacity }),
  });
  const data = await response.json();

  return data;
}
