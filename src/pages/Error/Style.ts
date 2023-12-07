import { styled } from 'styled-components';

// Box Components
export const Wrapper = styled.div`
  gap: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export const ErrorBox = styled.div`
  gap: 1.25rem;
  display: flex;
  align-items: center;
  & > h1 {
    font-weight: 700;
    font-size: 6.25rem;
    color: var(--gray600);
  }
  & > h2 {
    font-weight: 700;
    font-size: 3.125rem;
    color: var(--gray600);
  }
`

// Atom Components
export const Line = styled.div`
  width: 0.125rem;
  height: 6.25rem;
  background: var(--gray600);
`