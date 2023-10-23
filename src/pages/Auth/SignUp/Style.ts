import { styled } from 'styled-components';

export const Container = styled.div`
  gap: 5vh;
  display: flex;
  place-self: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    & > h2 {
      font-size: 15px;
      color: var(--gray700);
    }
  }
`

export const Page = styled.h1`
  align-self: flex-end;
  font-size: 30px;
  font-weight: 500px;
  color: var(--gray600);
`