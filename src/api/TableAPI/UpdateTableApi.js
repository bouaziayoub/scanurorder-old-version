import { urlApi } from "../ApiURL";

export async function UpdateTableApi(id, table_number, capacity, is_available) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");
  const response = await fetch(`${urlApi}/api/table/update/${id}`, {
    method: "PUT",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ table_number, capacity, is_available }),
  });
  const data = await response.json();
  return data;
}
