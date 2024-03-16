import { urlApi } from "../ApiURL";

export async function UpdateStatusPaymentApi(id) {
  let token = localStorage.getItem("tkn");
  token = token.replace(/^"(.*)"$/, "$1");
  const response = await fetch(`${urlApi}/api/orders/updatePayment/${id}`, {
    method: "PATCH",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await response.json();
  return data;
}
