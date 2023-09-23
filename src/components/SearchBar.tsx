import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchData } from '../utils/atoms';
import { imgPath } from '../utils/Paths';

interface Props {
  display: number;
  isSearch: boolean;
}

export const SearchBar = (props: Props) => {
  const navigate = useNavigate();
  const [search, setSearch] = useRecoilState(searchData);
  const KeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.code==="Enter") {
      const { value } = e.target as HTMLInputElement;
      navigate(`/search?q=${value}`);
    }
  }
  
  const ChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }

  return <SearchBO htmlFor="search" display={props.display} isSearch={props.isSearch}>
    <SearchIN type="input" id="search" placeholder="청원을 검색해주세요" onKeyDown={KeyDown} onChange={ChangeHandler} value={search} maxLength={35}/>
    <img src={`${imgPath.S}/Search.svg`} alt=""/>
  </SearchBO>
}

const SearchBO = styled.label<{display:number, isSearch:boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.display}%;
  cursor: text;
  height: 4.063rem;
  min-width: 36.625rem;
  transition: 0.2s all;
  border-radius: 1.25rem;
  box-sizing: border-box;
  padding: 0 1.875rem 0 1.875rem;
  border: ${props => props.isSearch ? "1" : "3"}px solid var(--main900);
  & > img { cursor: pointer; }
  &:hover { background: var(--gray100); }
  &:focus-within { background: var(--gray100); }
`

const SearchIN = styled.input`
  width: 90%;
  background: none;
  font-weight: 500;
  font-size: 1.063rem;
  &::placeholder { 
    font-size: 0.938rem; 
    color: var(--gray300); 
  }
`