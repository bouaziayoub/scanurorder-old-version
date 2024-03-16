import { urlApi } from "../ApiURL";
export async function ContactUsAPi(name, surname, email, msg) {
  const response = await fetch(`${urlApi}/api/contacts/contact`, {
    method: "POST",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname, email, msg }),
  });
  const data = await response.json();
  return data;
}
