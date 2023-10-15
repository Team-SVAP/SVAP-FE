import { instance } from "../Axios"

export const postReport = async (id: number) => {
  return await instance.post(`/report/${id}`);
}