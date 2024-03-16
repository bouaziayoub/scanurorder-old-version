import { urlApi } from "../ApiURL";

async function DeletePicturesApi(url) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");

  const response = await fetch(`${urlApi}/api/img/delete/`, {
    method: "DELETE",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ url }),
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export default DeletePicturesApi;
