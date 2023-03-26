import api from "./api";

export async function postTechnique(body) {
  const response = await api.post("/technique", body);
  return response.data;
}
