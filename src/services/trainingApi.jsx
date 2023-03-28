import api from "./api";

export async function getTraining() {
  const response = await api.get("/training/list");
  return response.data;
}

export async function postTraining(body) {
  const response = await api.post("/training", body);
  return response.data;
}

export async function putTraining(body, trainingId) {
  const response = await api.put(`/training/${trainingId}`, body);
  return response.data;
}

export async function deleteTraining(trainingId) {
  const response = await api.delete(`/training/${trainingId}`);
  return response.data;
}
