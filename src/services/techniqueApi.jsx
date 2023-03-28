import api from "./api";

export async function getTechnique() {
  const response = await api.get("/technique/list");
  return response.data;
}

export async function postTechnique(body) {
  const response = await api.post("/technique", body);
  return response.data;
}

export async function putTechnique(body, techniqueId) {
  const response = await api.put(`/technique/${techniqueId}`, body);
  return response.data;
}

export async function deleteTechnique(techniqueId) {
  const response = await api.delete(`/technique/${techniqueId}`);
  return response.data;
}
