import { instance } from "../Axios"

export const postReport = async (id: number) => { // 청원 신고
  return await instance.post(`/report/${id}`);
}

export const getReport = async () => { // 신고 조회
  return await instance.get(`/report/get-list`);
}