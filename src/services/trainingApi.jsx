import api from "./api";

export async function postTraining(body) {
  const response = await api.post("/training", body);
  return response.data;
}
