import { instance } from "../Axios"

export const postReport = async (id: number) => {
  return await instance.post(`/report/${id}`);
}

export const getReport = async () => {
  return await instance.get(`/report/get-list`);
}