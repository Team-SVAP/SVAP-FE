import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar';
import { useState, useEffect } from 'react'
import { Line, Top, Waiting } from "../Watch/Style";
import { getSearchPosts } from '../../apis/Petition';
import { Post } from '../../components/Post';
import * as _ from "./Style";

export const Search = () => {
  const [data, setData] = useState<any>();
  const [searchParams, ] = useSearchParams();
  const search = searchParams.get('q');

  useEffect(() => {
    getSearchPosts(`${search}`).then(res => {
      setData(res.data);
    }).catch(() => {})
  }, [search])

  return <_.Wrapper>
    <Top>
      <_.Title>청원보기</_.Title>
      <SearchBar width="100%" />
      <_.Result>'{search && search.length < 10 ? search : search?.substring(0, 10)+"..."}'에 대한 검색 결과입니다.</_.Result>
      <Line />
    </Top>
    <_.Data>
      {
        !data
        ? <Waiting>결과가 존재하지 않습니다.</Waiting>
        : <>
          {data.map((i: any) => {
            return <Post id={i.id} key={i.id} title={i.title} date={i.dateTime} loc={i.types} locDet={i.location} content={i.content} />
          })}
        </>
      }
    </_.Data>
  </_.Wrapper>
}