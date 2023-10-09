import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { imgPath } from '../utils/Paths';

export const Search = () => {
  const [searchParams, ] = useSearchParams();

  return <Wrapper>
    <Title>청원보기</Title>

    <SearchBar width="100%" />

    <Middle>
      <Dropdown>
        <div><h1>청원순대로 보기</h1><img src={`${imgPath.S}/Left.svg`} alt="" /></div>
        <Hidden>
          <h1>투표순으로 보기</h1>
          <h1>승인된 청원 보기</h1>
          <h1>검토중인 청원 보기</h1>
        </Hidden>
      </Dropdown>

      <Result>'{searchParams.get('q')}'에 대한 검색 결과입니다.</Result>
    </Middle>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  min-width: 36.625rem;
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

const Middle = styled.div`
  align-self: flex-start;
  display: flex;
`

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--gray000);
  & h1 { 
    font-size: 19px; 
    color: var(--gray700);
  }
  & > div:nth-child(1) {
    display: flex;
    gap: 15px;
  }
`

const Hidden = styled.div`
  display: flex;
  flex-direction: column;
`