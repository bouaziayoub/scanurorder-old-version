import { urlApi } from "../ApiURL";

async function DeletePicturesEstablishmentApi(id, url) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");

  const response = await fetch(
    `${urlApi}/api/establishments/deleteImage/${id}`,
    {
      method: "DELETE",
      headers: {
        "X-API-KEY": "ay@SS8!mRhg4Nm80",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ url }),
    }
  );
  const data = await response.json();
  return data;
}

export default DeletePicturesEstablishmentApi;
