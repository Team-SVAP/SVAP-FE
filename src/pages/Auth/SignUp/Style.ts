import { styled } from "styled-components";

export const HeaderBox = styled.div`
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
      font-size: 0.938rem;
      color: var(--gray700);
    }
  }
`

export const CountItem = styled.h1`
  align-self: flex-end;
  font-size: 1.875rem;
  font-weight: 31.25rem;
  color: var(--gray600);
`