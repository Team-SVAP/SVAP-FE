import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Post } from '../components/Post';
import { getMyPost } from '../apis/Petition';

export const My = () => {
  const [posts, setPosts]: any = useState([]);

  useEffect(() => {
    getMyPost().then(res => {
      res.data.map((i: any) => {
        setPosts((posts:any) => [...posts, {
          title: i.title,
          content: "내용내용내용내용내용",
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
  gap: 16px;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 50px;
  min-width: 46.625rem;
  min-height: 87vh;
  & > button {
    align-self: flex-end;
  }
`

const Title = styled.div`
  font-size: 24px;
  color: var(--gray800);
  font-weight: 500;
`

const Data = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > h1 {
    font-size: 20px;
    font-weight: 600;
    color: var(--gray600);
  }
`
