import api from "./api";

export async function getList(daysTraining) {
  const response = await api.get(`/list?daysTraining=${daysTraining}`);
  return response.data;
}
export async function getAllList() {
  const response = await api.get("/list/all");
  return response.data;
}

export async function getFilterExerc(bodyPart) {
  const response = await api.get(`/exercise/list?bodyPart=${bodyPart}`);
  return response.data;
}

export async function getFilterTech(nameTechnique) {
  const response = await api.get(`/technique/list?nameTechnique=${nameTechnique}`);
  return response.data;
}

export async function postList(body) {
  const response = await api.post("/list", body);
  return response.data;
}
