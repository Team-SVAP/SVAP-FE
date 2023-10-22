import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { useState, useEffect } from 'react'
import { Line, Top, Waiting } from "./Watch/Style";
import { getSearchPosts } from '../apis/Petition';
import { Post } from '../components/Post';

export const Search = () => {
  const [data, setData] = useState<any>();
  const [searchParams, ] = useSearchParams();
  const search = searchParams.get('q');
  const types: any = {
    recent: "최신순으로 보기",
    vote: "투표순으로 보기",
    access: "승인된 청원만 보기",
    wait: "검토중인 청원만 보기"
  }

  useEffect(() => {
    getSearchPosts(`${search}`).then(res => {
      setData(res.data);
    }).catch(() => {})
  }, [search])

  return <Wrapper>
    <Top>
      <Title>청원보기</Title>
      <SearchBar width="100%" />
      <Result>'{search && search.length < 10 ? search : search?.substring(0, 10)+"..."}'에 대한 검색 결과입니다.</Result>
      <Line />
    </Top>
    <Data>
      {
        !data
        ? <Waiting>결과가 존재하지 않습니다.</Waiting>
        : <Data>
          {data.map((i: any) => {
            return <Post id={i.id} key={i.id} title={i.title} date={i.dateTime} loc={i.types} locDet={i.location} content={i.content} />
          })}
        </Data>
      }
    </Data>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-width: 46.625rem;
  min-height: 87vh;
`

const Title = styled.h1`
  align-self: flex-start;
  font-weight: 500;
  color: var(--gray800);
`

const Result = styled.h1`
  color: var(--gray700);
  font-size: 26px;
  font-weight: 600;
`

const Data = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`