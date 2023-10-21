import { instance } from "../Axios";

// interface IData {
//   title: string;
//   content: string;
//   types: string;
//   location: string;
// }

export interface IPostPetition {
  FormData: FormData;
}

export const postPetition = async (form: any) => {
  return await instance.post("/petition", { content: form }, {
    headers: {
    "content-type": "multipart/form-data",
    "boundary": "--imageBoundary"
    }
  });
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