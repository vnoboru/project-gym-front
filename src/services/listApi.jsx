import api from "./api";

export async function getList() {
  const response = await api.get("/list?daysTraining=3");
  return response.data;
}
