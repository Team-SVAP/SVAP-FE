import { instance } from "../Axios";

export interface IPostPetition {
  FormData: FormData;
}

export const getPopularPetition = async () => {
  return await instance.get("/petition/popular");
}

export const getMyPost = async () => {
  return await instance.get("/user");
}

export const getPostDetail = async (id: number) => {
  return await instance.get(`/petition/${id}`)
}

export const getPosts = async (url: string) => {
  return await instance.get(`/petition/${url}`);
}

export const getSearchPosts = async (data: string) => {
  return await instance.post(`/petition/search`, { title: data });
}

export const deletePost = async (id: number) => {
  return await instance.delete(`/petition/${id}`);
}