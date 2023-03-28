import api from "./api";

export async function getExercises() {
  const response = await api.get("/exercise/list");
  return response.data;
}

export async function postExercise(body) {
  const response = await api.post("/exercise", body);
  return response.data;
}

export async function putExercise(body, exercId) {
  const response = await api.put(`/exercise/${exercId}`, body);
  return response.data;
}

export async function deleteExercise(exercId) {
  const response = await api.delete(`/exercise/${exercId}`);
  return response.data;
}
