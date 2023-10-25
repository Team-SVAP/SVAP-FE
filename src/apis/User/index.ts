import { instance } from "../Axios";
import { IAuth } from "../Types";

export const postSignUp = async (Data: IAuth) => { // 회원가입
  return await instance.post("/user/signup", Data);
}

export const postAdminSignUp = async (Data: IAuth, code: string) => { // 어드민 회원가입
  const data = {
    userName: Data.userName,
    accountId: Data.accountId,
    password: Data.password,
    code: code
  }
  return await instance.post("/user/admin/signup", data);
}

export const postLogin = async (Data: IAuth) => { // 로그인
  return await instance.post("/user/login", Data);
}

export const getMyPost = async () => { // 내가 쓴 청원 보기
  return await instance.get("/user");
}

export const getDuplication = async (Data: IAuth) => { // ID 중복확인
  return await instance.post("/user/duplication", Data);
}

export const getInfo = async () => { // 유저정보 확인
  return await instance.get("/user/my-info");
}