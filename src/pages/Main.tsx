import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { imgPath } from '../utils/Paths';
import '../styles/style';
import { useState, useEffect } from 'react';
import { getPopularPetition } from '../apis/Petition';

export const Main = () => {
  const [best, setBest] = useState({
    title: "",
    content: <></>,
    id: ""
  })

  useEffect(() => {
    getPopularPetition().then(res => {
      console.log(res);
      setBest({
        title: res.data.title,
        content: <>{(res.data.content).replaceAll("\n", <br />)}</>,
        id: res.data.id
      })
    })
  }, [])

  return <>
    <Slide src={`${imgPath.Sl}/1.png`} />

    <SearchBar width="45%" />

    <Links>
      <LinkButton to="watch"><h1>청원 보기</h1><Watch src={`${imgPath.S}/Watch.svg`} alt=""/></LinkButton>
      <LinkButton to="write"><h1>청원 작성</h1><Write src={`${imgPath.S}/Write.svg`} alt=""/></LinkButton>
    </Links>

    <Posts>
      <PostsTitle><h1>인기 청원</h1><Link to="/search/best">더보기</Link></PostsTitle>
      <PostsData>
        <h1>{best.title}</h1>
        <h2>{best.content}</h2>
        <Link to={`/posts/${best.id}`}>전체보기 <img src={`${imgPath.S}/Right.svg`} alt=""/></Link>
      </PostsData>
    </Posts>
  </>
}

const Slide = styled.img`
  width: 80%;
  height: auto;
`

const Links = styled.div`
  gap: 1.25rem;
  display: flex;
  justify-content: space-between;
  width: 45%;
  min-width: 36.625rem;
`

const Posts = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
  width: 45%;
  min-width: 36.625rem;
`

const LinkButton = styled(Link)`
  gap: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  width: 25.625rem;
  height: 13.125rem;
  transition: 0.2s all;
  background: var(--gray000);
  border-radius: 1.25rem 3.75rem;
  border: 0.063rem solid var(--gray200);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  & > h1 { // 텍스트
    font-size: 2rem;
    font-weight: 600;
    color: var(--gray700);
  }
  &:hover { background: var(--gray100); }
`

const PostsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h1 { // 인기 청원
    font-weight: 600;
    font-size: 1.75rem;
    color: var(--gray600);
  }
  & > a { // 더보기
    cursor: pointer;
    transition: 0.2s all;
    font-size: 1.325rem;
    font-weight: 600;
    color: var(--gray600);
    &:hover { color: var(--gray500); }
  }
`

const PostsData = styled.div`
  gap: 0.625rem;
  display: flex;
  flex-direction: column;
  & > h1 { // 제목
    font-weight: 700;
    font-size: 2.25rem;
  }
  & > h2 { // 글
    color: var(--gray700);
    font-weight: 700;
    font-size: 1.5rem;
    user-select: text;
  }
  & > a { // 전체보기 버튼
    gap: 0.625rem;
    display: flex;
    align-items: center;
    width: 7.5rem;
    cursor: pointer;
    transition: 0.2s all;
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--gray700);
    &:hover { gap: 1.25rem; }
  }
`

const Watch = styled.img`
  width: 1.75rem;
  height: 1.563rem;
`

const Write = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`