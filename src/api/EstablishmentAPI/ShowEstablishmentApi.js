import { urlApi } from "../ApiURL";

async function ShowEstablishmentApi() {
  const id = localStorage.getItem("id_establishment");

  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");

  const response = await fetch(`${urlApi}/api/establishments/show/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await response.json();
  return data;
}

export default ShowEstablishmentApi;
