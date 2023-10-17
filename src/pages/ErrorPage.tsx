import { styled } from 'styled-components';
import '../styles/color.css';

export const Error = () => {
  return <Wrapper>
    <h1>404</h1>
    <Line />
    <h2>페이지를 찾을 수 없습니다</h2>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 1.25rem;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  & > h1 {
    font-weight: 700;
    font-size: 6.25rem;
    color: var(--gray600);
  }
  & > h2 {
    font-weight: 700;
    font-size: 3.125rem;
    color: var(--gray600);
  }
`

const Line = styled.div`
  width: 0.125rem;
  height: 6.25rem;
  background: var(--gray600);
`