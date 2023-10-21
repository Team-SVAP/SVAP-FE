import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { imgPath } from '../utils/Paths';
import { ISearch } from './Types';

export const SearchBar = ({ width }: ISearch) => {
  const navigate = useNavigate();

  const KeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code==="Enter") { 
      navigate(`/search?q=${e.currentTarget.value}`);
    }
  }

  return <SearchBox htmlFor="search" width={width}>
    <Input type="input" id="search" placeholder="청원을 검색해주세요" onKeyDown={KeyDown} maxLength={100}/>
    <img src={`${imgPath.S}/Search.svg`} alt=""/>
  </SearchBox>
}

const SearchBox = styled.label<{width:string}>`
  gap: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.063rem;
  min-width: 36.625rem;
  width: ${({width}) => width};
  padding: 0 1.875rem 0 1.875rem;
  border: 2px solid var(--main900);
  & img { cursor: pointer; } 
  &:hover { background: var(--gray100); }
  &:focus-within { 
    background: var(--gray100); 
    border: 2px solid var(--main900);
  }
`

const Input = styled.input`
  width: 100%;
`