import { styled } from 'styled-components';

export const Wrapper = styled.div`
  gap: 16px;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  width: 50%;
  min-width: 46.625rem;
  min-height: 87vh;
`

export const Title = styled.h1`
  align-self: flex-start;
  font-weight: 500;
  color: var(--gray800);
`

export const Middle = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
`

export const Dropdown = styled.div<{clicked: boolean}>`
  width: 185.5px;
  display: flex;
  flex-direction: column;
  background: var(--gray000);
  padding: 10px;
  border-radius: 5px;
  background: #f8f8f8;
  & h1 { 
    font-size: 19px; 
    font-weight: 500;
    color: var(--gray700);
    cursor: pointer;
  }
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    background: #f8f8f8;
    & > div#hidden {
      display: ${({clicked}) => !clicked && "flex"};
    }
    & img#arrow {
      transform: rotate(-90deg);
    }
  }
`

export const Hidden = styled.div`
  width: inherit;
  gap: 5px;
  display: none;
  background: #f8f8f8;
  position: absolute;
  margin-left: -10px;
  margin-top: 29px;
  flex-direction: column;
  padding: 10px;
  border-radius: 0 0 5px 5px;
`

export const Selection = styled.div`
  position: absolute;
  justify-self: center;
  align-self: center;
  gap: 20px;
  display: flex;
  & > a {
    cursor: pointer;
    transition: 0.2s all;
    font-size: 26px;
    font-weight: 500;
    color: var(--gray600);
    &:hover {
      color: var(--gray800);
    }
  }
  & > a#selected {
    color: var(--main900);
  }
`

export const Data = styled.div`
  gap: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-self: start center;
`

export const Top = styled.div`
  gap: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Line = styled.div`
  width: 105%;
  height: 1px;
  background: var(--gray200);
`

export const Waiting = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--gray700);
`