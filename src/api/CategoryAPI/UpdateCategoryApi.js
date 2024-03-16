import { urlApi } from "../ApiURL";

export async function UpdateCategoryApi(idCategory, name) {
  const idEstablishment = localStorage.getItem("id_establishment");
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");
  const response = await fetch(
    `${urlApi}/api/category/update/${idEstablishment}/${idCategory}`,
    {
      method: "PUT",
      headers: {
        "X-API-KEY": "ay@SS8!mRhg4Nm80",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ name }),
    }
  );
  const data = await response.json();
  return data;
}