import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchData } from '../utils/Atoms';
import { imgPath } from '../utils/Paths';

interface ISearch {
  width: string;
}

export const SearchBar = ({ width }: ISearch) => {
  const [search, setSearch] = useRecoilState(searchData);
  const navigate = useNavigate();

  const KeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code==="Enter") { 
      navigate(`/search?q=${e.currentTarget.value}`);
    }
  }
  
  const ChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }

  return <Container htmlFor="search" width={width}>
    <_Input type="input" id="search" placeholder="청원을 검색해주세요" onKeyDown={KeyDown} onChange={ChangeHandler} value={search} maxLength={100}/>
    <img src={`${imgPath.S}/Search.svg`} alt=""/>
  </Container>
}

const Container = styled.label<{width:string}>`
  gap: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.063rem;
  min-width: 36.625rem;
  width: ${({width}) => width};
  padding: 0 1.875rem 0 1.875rem;
  border: 2px solid var(--main900);
  img { 
    cursor: pointer; 
  } &:hover { 
    background: var(--gray100); 
  } &:focus-within { 
    background: var(--gray100); 
    border: 2px solid var(--main900);
  }
`

const _Input = styled.input`
  width: 100%;
`