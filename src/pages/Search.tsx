import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { SearchBar } from '../components/SearchBar';

export const Search = () => {
  const [searchParams, ] = useSearchParams();

  return <Wrapper>
    <Title>청원보기</Title>

    <SearchBar display={100} isSearch={true} />

    <Result>'{searchParams.get('q')}'에 대한 검색 결과입니다.</Result>
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