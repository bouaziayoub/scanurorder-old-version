import { urlApi } from "../ApiURL";

export async function CreateReservationApi(date, hour, people, email) {
  const id_establishment = localStorage.getItem("id_establishment");

  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");

  const response = await fetch(`${urlApi}/api/reservations/create`, {
    method: "POST",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },

    body: JSON.stringify({
      idStablishment: id_establishment,
      date,
      hour,
      people,
      email,
    }),
  });
  const data = await response.json();

  return data;
}
