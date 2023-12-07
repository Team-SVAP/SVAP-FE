import { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { getMyPost } from "../../apis/User";
import * as _ from "./Style";

export const My = () => {
  const [posts, setPosts] = useState<object[]>([]);

  useEffect(() => {
    getMyPost().then(res => {
      setPosts(res.data);
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