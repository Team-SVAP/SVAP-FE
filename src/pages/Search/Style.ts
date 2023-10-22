import { styled } from 'styled-components';

export const Wrapper = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
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

export const Result = styled.h1`
  color: var(--gray700);
  font-size: 26px;
  font-weight: 600;
`

export const Data = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`