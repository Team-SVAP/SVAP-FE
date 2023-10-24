import { instance } from "../Axios";

export const postBan = async (user: string, reason: string) => {
  return await instance.post(`/ban/${user}`, { banReason: reason });
}

export const getBan = async () => {
  return await instance.get(`/ban`);
}

export const postUnban = async (id: number) => {
  return await instance.delete(`/ban/${id}`);
}
