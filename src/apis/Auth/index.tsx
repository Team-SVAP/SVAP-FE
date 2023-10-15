import { instance } from "../Axios";

export interface IAuth {
  userName?: string;
  accountId: string;
  password?: string;
  code?: string;
}

export const postLogin = async (Data: IAuth) => {
  return await instance.post("/user/login", Data);
}

export const postSignUp = async (Data: IAuth) => {
  return await instance.post("/user/signup", Data);
}

export const postASignUp = async (Data: IAuth) => {
  return await instance.post("/user/admin/signup", Data);
}

export const getDuplication = async (Data: IAuth) => {
  return await instance.post("/user/duplication", Data);
}

export const getInfo = async () => {
  return await instance.get("/user/my-info");
}