const BASE_URL = "http://localhost:5001";

export const predictService = async (data: File) => {
  const formData = new FormData();
  formData.append("image_file", data);
  const response = await fetch(`${BASE_URL}/predict-image`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  return response.json();
};
