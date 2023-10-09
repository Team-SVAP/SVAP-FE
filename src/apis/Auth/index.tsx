import { IAuth, ISignUp } from "./Types";
import { instance } from "../Axios";

export const postLogin = async (Data: IAuth) => {
  return await instance.post("/user/login", Data);
}

export const postSignUp = async ({ Data, Admin }: ISignUp) => {
  return await instance.post(`/user/${Admin ? 'admin/signup' : 'signup'}`, Data);
}

export const getInfo = async () => {
  return await instance.get("/user/my-info");
}