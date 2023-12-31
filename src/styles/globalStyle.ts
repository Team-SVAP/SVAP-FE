import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: none;
    outline: none;
    background: none;
    user-select: none;
    transition: 0.2s all;
    text-decoration-line: none;
    font-family: "IBM Plex Sans KR";
  }
  
  *::-webkit-scrollbar {
    width: 0px;
  }

  label, textarea {
    cursor: text;
    border-radius: 1rem;
    padding: 0 1.25rem 0 1.25rem;
    box-sizing: border-box;
    border: 0.125rem solid var(--gray300);
    &:focus-within { 
      border: 0.125rem solid var(--main700);
    }
  }

  input, textarea {
    font-weight: 500;
    font-size: 1.063rem;
    &::placeholder { 
      font-size: 0.938rem; 
      color: var(--gray300);
    }
  }

  body { 
    transition: none; 
  }

  textarea {
    resize: none;
    padding: 1rem 1.25rem 1rem 1.25rem;
  }
`