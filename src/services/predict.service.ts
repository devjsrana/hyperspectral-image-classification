const BASE_URL = "http://localhost:5001";

export const predictService = async (data: any) => {
  const response = await fetch(`${BASE_URL}/predict-image`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
