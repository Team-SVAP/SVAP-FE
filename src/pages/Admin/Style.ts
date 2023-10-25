import { styled } from 'styled-components';

// Box Components
export const Wrapper = styled.div`
  gap: 3.125rem;
  display: flex;
  justify-content: center;
  width: 90%;
`

export const ContentBox = styled.div`
  gap: 0.625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 80vh;
`

export const ScrollBox = styled.div`
  gap: 0.625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  overflow-y: auto;
`

// Atom Components
export const TitleItem = styled.div`
  margin: 0.625rem 0 0.625rem 0;
  font-weight: 600;
  font-size: 2.375rem;
  color: var(--gray800);
`

export const LineItem = styled.div`
  width: 100%;
  height: 0.063rem;
  max-width: 32.813rem;
  background: var(--gray800);
`