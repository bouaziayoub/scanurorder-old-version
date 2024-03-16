import { urlApi } from "../ApiURL";

export async function ChangePasswordApi(token, password) {
  const response = await fetch(`${urlApi}/api/managers/update`, {
    method: "PUT",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
      "Content-Type": "application/json",
    },
    body: getBody(token, password),
  });
  const data = await response.json();
  return data;
}

function getBody(token, password) {
  if (sessionStorage.getItem("admin")) {
    return JSON.stringify({ token, admin_password: password });
  } else if (sessionStorage.getItem("worker")) {
    return JSON.stringify({ token, worker_password: password });
  }
}

// export async function ChangePasswordAdminApi(token, password) {
//   const response = await fetch(`${urlApi}/api/managers/update`, {
//     method: "PUT",
//     headers: {
//       "X-API-KEY": "ay@SS8!mRhg4Nm80",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ token, admin_password: password }),
//   });
//   const data = await response.json();
//   return data;
// }
