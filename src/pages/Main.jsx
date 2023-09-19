import { styled } from 'styled-components';
import Watch from '../assets/SVG/Watch.svg';
import Write from '../assets/SVG/Write.svg';
import SearchIcon from '../assets/SVG/Search.svg';
import Slide from '../assets/PNG/Slides/1.png';
import RightArrow from '../assets/SVG/RightArrow.svg';
import '../styles/color.css';

export const Main = () => {
  return <>
    <Slides>
      <img src={Slide} alt="" />
    </Slides>
    
    <SearchBar htmlFor="search">
      <Search id="search" placeholder="청원을 검색해보세요" />
      <img src={SearchIcon} alt=""/>
    </SearchBar>

    <Links>
      <Link><h1>청원보기</h1><img src={Watch} alt="" /></Link>
      <Link><h1>청원하기</h1><img src={Write} alt="" /></Link>
    </Links>

    <Best>
      <BTop>
        <h1>인기 청원</h1>
        <h2>더보기</h2>
      </BTop>
      <BPost>
        <h1>짧은 제목</h1>
        <h2>짧은 글</h2>
        <Go2Post>
          <h1>전체보기 </h1>
          <img src={RightArrow} alt="" />
        </Go2Post>
      </BPost>
    </Best>
  </>
}

const Slides = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 23.75rem;
  & > img {
    width: 100%;
    height: auto;
  }
`

const SearchBar = styled.label`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: text;
  padding: 0.938rem;
  padding-left: 2.5rem;
  transition: 0.2s all;
  padding-right: 2.5rem;
  border-radius: 1.25rem;
  box-sizing: border-box;
  border: 3px solid var(--main900);
  & > img { cursor: pointer; }
  &:hover { background: var(--gray100); }
  &:focus-within { background: var(--gray100); }
`

const Links = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Best = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin-top: 1.875rem;
`

const BTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h1, h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--gray600);
  }
  & > h2 {
    transition: 0.2s all;
    &:hover {
      color: var(--gray400);
    }
  }
`

const BPost = styled.div`
  display: flex;
  gap: 0.313rem;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  margin-bottom: 6.25rem;
  & > h1 {
    font-weight: 700;
    font-size: 2.25rem;
    color: var(--gray700);
  }
`

const Go2Post = styled.div`
  gap: 0.313rem;
  display: flex;
  align-items: center;
  width: 6.25rem;
  transition: 0.2s all;
  & > h1 {
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--gray600);
  }
  & > img {
    width: 0.917rem;
    height: 0.917rem;
  }
  &:hover { gap: 0.625rem; }
`

const Search = styled.input`
  width: 92.5%;
  border: none;
  outline: none;
  background: none;
  font-weight: 500;
  font-size: 1.125rem;
  &::placeholder { color: #BEBEBE; }
`

const Link = styled.div`
  gap: 0.313rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  cursor: pointer;
  height: 13.125rem;
  transition: 0.2s all;
  background: #FDFDFD;
  border-radius: 1.25rem 3.75rem;
  border: 1px solid var(--gray100);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  & > h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #505050;
  }
  &:hover { background: var(--gray100); }
`