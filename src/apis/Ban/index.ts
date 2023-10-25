import { instance } from "../Axios";

export const postBan = async (user: string, reason: string) => { // 유저 차단
  return await instance.post(`/ban/${user}`, { banReason: reason });
}

export const postUnban = async (id: number) => { // 유저 차단 해제
  return await instance.delete(`/ban/${id}`);
}

export const getBan = async () => { // 유저 차단 조회
  return await instance.get(`/ban`);
}
