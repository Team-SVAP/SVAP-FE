import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { imgPath } from '../utils/Paths';
import '../styles/style';

export const Main = () => {
  return <>
    <Slide src={`${imgPath.Sl}/1.png`} />

    <SearchBar width={45} $search={false}/>

    <Links>
      <LinkButton to="watch"><h1>청원 보기</h1><Watch src={`${imgPath.S}/Watch.svg`} alt=""/></LinkButton>
      <LinkButton to="write"><h1>청원 작성</h1><Write src={`${imgPath.S}/Write.svg`} alt=""/></LinkButton>
    </Links>

    <Posts>
      <PostsTitle><h1>인기 청원</h1><h2>더보기</h2></PostsTitle>
      <PostsData>
        <h1>촉법소년 법 폐지 & 개정</h1>
        <h2>요즘들어 나이 믿고 까불고 사고치고 사건 사고가 많은 나이 만 14이하 촉법소년들 이거 문제 심각합니다. 
          빨리 법개정안하면 진짜 누구하나 죽을꺼임
          이미 학폭으로 14세 미만 어린 피해자들이 많이 나오고도 있는 상황인대 무슨 근거와 깡으로 촉법소년 유지를 하고 있는건지 이유를 모르겠네요. 
          14세 미만 아이들이 모여서 또래 친구들 폭행. 폭언. 성희롱. 성추행등으로 사망하는 피해자가 있고, 온갖 중범죄란 죄는 다저질르는대 촉법이란 이유로 형사처벌 면하고. 
          촉법이 아니더라도 어리다.교화가 먼저고 교육이 먼저라는 이유로 형을 너무 낮게 한다던가.
          뭐 이딴 개같은 법이 어딨고 뭐 있단 개같은 경우가 다있습니까? 마냑 피해자가 당신들 아들.딸이 ...
        </h2>
        <div>전체보기 <img src={`${imgPath.S}/Right.svg`} alt=""/></div>
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
  justify-content: space-between;
  & > h1 { // 인기 청원
    font-weight: 600;
    font-size: 1.75rem;
    color: var(--gray600);
  }
  & > h2 { // 더보기
    cursor: pointer;
    transition: 0.2s all;
    font-size: 1.625rem;
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
  & > div { // 전체보기 버튼
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