import { urlApi } from "../ApiURL";

export async function UpdateProductApi(
  id,
  name,
  price,
  description,
  is_available
) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");
  const response = await fetch(`${urlApi}/api/products/update/${id}`, {
    method: "PUT",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ name, price, description, is_available }),
  });
  const data = await response.json();
  return data;
}
