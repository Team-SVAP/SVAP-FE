import { useEffect, useState } from "react";
import { getMyPost } from "../../apis/User";
import { Post } from "../../components/Post";
import { IData } from "./Types";
import * as _ from "./Style";

export const My = () => {
  const [posts, setPosts] = useState<object[]>([]);

  useEffect(() => {
    getMyPost().then(res => {
      res.data.map((i: IData) => {
        setPosts((posts:object[]) => [...posts, {
          title: i.title,
          content: i.content,
          types: i.type==="SCHOOL" ? "학교" : "기숙사",
          location: i.location,
          date: (i.dateTime.split("T"))[0],
          id: i.id
        }])
      })
    }).catch(() => {})
  }, [])

  return <_.Wrapper>
    <_.Title>내가 쓴 청원 보기</_.Title>
    <_.ContentBox>
      {
        posts.length!==0 ?
        posts.map((i: any) => {
          return <Post id={i.id} key={i.id} title={i.title} date={i.date} loc={i.types} locDet={i.location} content={i.content} />
        })
        : <h1>작성한 청원이 존재하지 않습니다</h1>
      }
    </_.ContentBox>
  </_.Wrapper>
}