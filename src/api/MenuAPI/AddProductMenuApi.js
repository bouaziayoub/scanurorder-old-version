import { urlApi } from "../ApiURL";

export async function AddProductMenuApi(id, idProduct) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");
  const response = await fetch(`${urlApi}/api/menu/addProduct/${id}`, {
    method: "PATCH",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ idProduct }),
  });
  const data = await response.json();
  return data;
}
