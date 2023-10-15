import { instance } from "../Axios"

export const postVote = async (id: number) => {
  return await instance.patch(`/vote/${id}`)
}