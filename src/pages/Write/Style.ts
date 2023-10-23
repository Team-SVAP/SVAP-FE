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
  height: 16.875rem;
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