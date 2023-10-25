import { instance } from "../Axios"

export const postVote = async (id: number) => { // 청원 투표
  return await instance.patch(`/vote/${id}`)
}