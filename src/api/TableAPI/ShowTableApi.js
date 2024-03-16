import { urlApi } from "../ApiURL";

async function ShowTableApi() {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");

  const response = await fetch(`${urlApi}/api/table/show`, {
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

export default ShowTableApi;
