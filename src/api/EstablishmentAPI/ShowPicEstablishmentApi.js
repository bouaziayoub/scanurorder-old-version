import { urlApi } from "../ApiURL";

async function ShowPicEstablishmentApi(id) {
  const response = await fetch(
    `${urlApi}/api/establishments/showPhotoFromEstablishment/${id}`,
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

export default ShowPicEstablishmentApi;
