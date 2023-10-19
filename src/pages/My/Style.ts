import { styled } from "styled-components";

// Box Components
export const Wrapper = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 87vh;
  min-width: 46.625rem;
  padding-top: 3.125rem;
  & > button { align-self: flex-end; }
`

export const ContentBox = styled.div`
  gap: 0.625rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > h1 {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--gray600);
  }
`

// Atom Components
export const Title = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--gray800);
`
