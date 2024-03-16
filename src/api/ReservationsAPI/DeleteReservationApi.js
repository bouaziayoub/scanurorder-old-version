import { urlApi } from "../ApiURL";

export async function DeleteReservationApi(id) {
  // const id_establishment = localStorage.getItem("id_establishment");

  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");

  const response = await fetch(`${urlApi}/api/reservations/delete/${id}`, {
    method: "DELETE",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await response.json();

  return data;
}
