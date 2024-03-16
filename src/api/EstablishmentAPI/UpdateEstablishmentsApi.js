import { urlApi } from "../ApiURL";

export async function UpdateEstablishmentApi(
  id,
  name,
  description,
  allows_reservations,
  phone,
  address,
  email,
  website,
  logo_url,
  whatsapp,
  instagram,
  twitter,
  youtube,
  facebook,
  linkedin
) {
  const response = await fetch(`${urlApi}/api/establishments/update/${id}`, {
    method: "PATCH",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      name,
      description,
      allows_reservations,
      phone,
      address,
      email,
      website,
      logo_url,
      whatsapp,
      instagram,
      twitter,
      youtube,
      facebook,
      linkedin,
    }),
  });
  const data = await response.json();
  return data;
}
