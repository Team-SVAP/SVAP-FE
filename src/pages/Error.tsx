import { styled } from 'styled-components';
import '../styles/color.css';

export const Error = () => {
  return <Wrapper>
    <div>
      <h1>404</h1>
      <Line />
      <h2>페이지를 찾을 수 없습니다</h2>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  & > div {
    gap: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 80px;
    & > h1 {
      font-size: 100px;
      color: var(--gray600);
      font-weight: 700;
    }
    & > h2 {
      font-size: 50px;
      color: var(--gray600);
      font-weight: 700;
    }
  }
`

const Line = styled.div`
  width: 2px;
  height: 100px;
  background: var(--gray600);
`