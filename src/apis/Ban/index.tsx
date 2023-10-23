import { instance } from "../Axios";

export const postBan = async (user: string, reason: string) => {
  return await instance.post(`/ban/${user}`, { banReason: reason });
}
