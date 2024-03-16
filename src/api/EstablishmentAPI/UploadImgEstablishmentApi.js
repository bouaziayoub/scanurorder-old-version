import { urlApi } from "../ApiURL";

export async function UploadImagesEstablishmentApi(id, url) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");
  const response = await fetch(
    `${urlApi}/api/establishments/updateImage/${id}`,
    {
      method: "PATCH",
      headers: {
        "X-API-KEY": "ay@SS8!mRhg4Nm80",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        url
      }),
    }
  );
 
  const data = await response.json();
  console.log(data);
  return data;
}