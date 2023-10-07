import { IAuth, ISignUp } from "./Types";
import { instance } from "../Axios";

export const postLogin = async (Data: IAuth) => {
  if(Data.accountId !== "" && Data.password !== "") {
    return await instance.get("/users/login", { data: Data });
  };
}

export const postSignUp = async ({ Data, Admin }: ISignUp) => {
  if(Data.userName !== "" && Data.accountId !== "" && Data.password !== "") {
    return await instance.get(`/${Admin ? 'admin/signup' : 'signup'}`, { data: Data });
  };
}