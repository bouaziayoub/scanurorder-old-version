import { urlApi } from "../ApiURL";

async function UploadImageApi(image) {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch(`${urlApi}/api/img/upload/`, {
    method: "POST",
    headers: {
      "X-API-KEY": "ay@SS8!mRhg4Nm80",
    },
    body: formData,
  });

  if (response.ok) {
    alert("Image uploaded successfully");
  } else {
    alert("Failed to upload image");
  }
  return response;
}
export default UploadImageApi;
