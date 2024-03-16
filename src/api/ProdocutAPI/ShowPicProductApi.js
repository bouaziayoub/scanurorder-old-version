import { urlApi } from "../ApiURL";

async function ShowPicProductApi(idProduct) {
  const idEstablishment = localStorage.getItem("id_establishment");

  const response = await fetch(
    `${urlApi}/api/products/showPhotoFromProducts/${idEstablishment}/${idProduct}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "ay@SS8!mRhg4Nm80",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}

export default ShowPicProductApi;
