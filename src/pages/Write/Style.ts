import { styled } from 'styled-components';

export const Wrapper = styled.div`
  gap: 3.125rem;
  display: grid;
  place-items: center;
  width: 33.25rem;
`

export const DoubleBox = styled.div`
  gap: 1.563rem;
  display: flex;
`

export const Title = styled.div`
  gap: 0.625rem;
  display: flex;
  align-items: center;
  place-self: center center;
  & > h1 {
    font-weight: 700;
    font-size: 1.625rem;
    color: var(--gray700);
  }
`

export const Interaction = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    font-weight: 500;
    font-size: 1.25rem;
    color: var(--gray700);
    span {
      color: red;
      font-weight: 300;
    }
  }
`

export const AreaInput = styled.textarea`
  width: 100%;
  resize: none;
  height: 16.875rem;
`

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  height: 3.125rem;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 0 2.25rem 0 2.25rem;
  border: 0.125rem solid var(--gray300);
  & > div#box{
    display: grid;
    place-items: center center;
    grid-template-columns: 95% 5%;
    width: 100%;
    height: 3.125rem;
    & img { place-self: center end; }
    & h1 { place-self: center center; }
  }
  & > div#hidden {
    gap: 10px;
    display: none;
    align-items: center;
    flex-direction: column;
    height: 100px;
    width: 252.5px;
    margin-top: 45px;
    border-top: none;
    background: white;
    position: absolute;
    transition: 0.2s all;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
    border-radius: 0 0 1rem 1rem;
    border: 0.125rem solid var(--main700);
    & h1 {
      width: 70%;
      background: white;
      text-align: center;
      border-radius: 10px;
      transition: 0.2s all;
      &:hover { background: rgba(0, 0, 0, 0.1); }
    }
  }
  &:hover {
    border-bottom: none;
    border-radius: 1rem 1rem 0 0;
    border: 0.125rem solid var(--main700);
    & img { transform: rotate(-90deg); }
    & > div#hidden { display: flex; }
  }
`

export const Image = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  min-height: 3.125rem;
  border: 0.125rem solid var(--gray300);
  & > input { display: none; }
  &:focus-within { border: 0.125rem solid var(--gray300); }
`