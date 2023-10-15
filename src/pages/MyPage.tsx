import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getMyPost } from "../apis/Petition";
import { Post } from "../components/Post";

interface IData {
  title: string;
  content: string;
  type: string;
  location: string;
  dateTime: string;
  id: number;
}

export const My = () => {
  const [posts, setPosts]: any = useState([]);

  useEffect(() => {
    getMyPost().then(res => {
      res.data.map((i: IData) => {
        setPosts((posts:any) => [...posts, {
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

  return <Wrapper>
    <Title>내가 쓴 청원 보기</Title>
    <Data>
      {
        posts.length!==0 ?
        posts.map((i: any) => {
          return <Post id={i.id} key={i.id} title={i.title} date={i.date} loc={i.types} locDet={i.location} content={i.content} />
        })
        : <h1>작성한 청원이 존재하지 않습니다</h1>
      }
    </Data>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 87vh;
  min-width: 46.625rem;
  padding-top: 3.125rem;
  & > button { align-self: flex-end; }
`

const Title = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--gray800);
`

const Data = styled.div`
  gap: 0.625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > h1 {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--gray600);
  }
`
