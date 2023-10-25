import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 2fr 1fr;
  width: 60%;
  height: 38.125rem;
  max-width: 34.375rem;
  border-radius: 1.25rem;
  box-sizing: border-box;
  border: 0.188rem solid var(--main500);
  padding: 0.625rem 0.925rem 0.625rem 0.925rem;
`

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 2.188rem;
  color: var(--gray700);
`

export const MainBox = styled.div`
  gap: 0.625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
`

export const FooterBox = styled.div`
  display: flex;
  place-self: end auto;
  align-items: flex-end;
  justify-content: center;
  font-weight: 500;
  color: var(--gray600);
  & > a {
    margin: 0 0.438rem 0 0.438rem;
    color: var(--main700);
    &:hover { color: var(--main400); }
  }
`