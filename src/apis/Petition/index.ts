import { IData } from "../../pages/Write/Types";
import { instance } from "../Axios";

// export const postPost = async () => { // 청원 글 작성
//   return await instance.post("/petition/");
// }

export const patchPost = async (data: IData, id: number) => { // 청원 글 수정
  return await instance.patch(`/petition/${id}`, data);
}

export const deletePost = async (id: number) => { // 청원 글 삭제
  return await instance.delete(`/petition/${id}`);
}

export const getPostDetail = async (id: number) => { // 청원 글 상세보기
  return await instance.get(`/petition/${id}`)
}

export const getSearchPosts = async (data: string) => { // 청원 검색
  return await instance.post("/petition/search", { title: data });
}

export const getPopularPetition = async () => { // 인기 청원 조회
  return await instance.get("/petition/popular");
}

export const getPosts = async (url: string) => { // 청원 조회
  return await instance.get(`/petition/${url}`);
}

export const patchState = async (state: string, id: number) => { // 청원 상태 변경
  return await instance.patch(`/petition/${state}/${id}`);
}