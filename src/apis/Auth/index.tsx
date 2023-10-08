import { IAuth, ISignUp } from "./Types";
import { instance } from "../Axios";

export const postLogin = async (Data: IAuth) => {
  if(Data.accountId !== "" && Data.password !== "") {
    return await instance.post("/user/login", Data);
  };
}

export const postSignUp = async ({ Data, Admin }: ISignUp) => {
  if(Data.userName !== "" && Data.accountId !== "" && Data.password !== "") {
    return await instance.post(`/user/${Admin ? 'admin/signup' : 'signup'}`, Data);
  };
}