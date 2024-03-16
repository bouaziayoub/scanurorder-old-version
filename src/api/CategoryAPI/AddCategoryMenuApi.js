import { urlApi } from "../ApiURL";
export async function AddCategoryMenuApi(idCategory, idMenu) {
  const idEstablishment = localStorage.getItem("id_establishment");

  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");
  const response = await fetch(
    `${urlApi}/api/category/addMenu/${idEstablishment}/${idCategory}/${idMenu}`,
    {
      method: "PUT",
      headers: {
        "X-API-KEY": "ay@SS8!mRhg4Nm80",
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  const data = await response.json();
  return data;
}
