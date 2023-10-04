import { styled } from 'styled-components';

export const Wrapper = styled.div`
display: grid;
place-items: center;
width: 34.375rem;
height: 38.125rem;
padding: 0.625rem;
border-radius: 1.25rem;
box-sizing: border-box;
border: 0.188rem solid var(--main500);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 2.188rem;
  color: var(--gray700);
`

export const Main = styled.div`
  gap: 0.625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
`

export const Footer = styled.div`
  display: flex;
  place-self: end auto;
  align-items: flex-end;
  justify-content: center;
  font-weight: 500;
  color: var(--gray600);
  & > a {
    transition: 0.2s all;
    margin: 0 0.438rem 0 0.438rem;
    color: var(--main700);
    &:hover { color: var(--main400); }
  }
`