import { styled } from 'styled-components';

// Box Components
export const Wrapper = styled.div`
  gap: 4.375rem;
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-height: 87vh;
  box-sizing: border-box;
  padding: 1.563rem 0 1.563rem 0;
`

export const ContentBox = styled.div`
  gap: 0.313rem;
  display: flex;
  flex-direction: column;
  width: 70%;
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    gap: 5px;
    & img {
      cursor: pointer;
    }
  }
`

export const InteractionBox = styled.div`
  gap: 1.875rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 30%;
`

export const CountBox = styled.div`
  display: flex;
  justify-content: space-between;
  & > h1 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--gray700);
  }
`

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  & > img#image {
    width: 24.375rem;
    height: 18.75rem;
    transition: none;
    box-sizing: border-box;
    border-radius: 0.938rem;
    border: 0.125rem solid whitesmoke;
    box-shadow: 0.125rem 0.125rem 0.625rem whitesmoke;
  }
  & > img#left, img#right {
    padding: 0.625rem;
    cursor: pointer;
    position: absolute;
    filter: invert(100%);
    &:hover { filter: invert(50%); }
  }
  & > img#left { 
    align-self: flex-start; 
    &:hover { margin-right: 5px; }
  }
  & > img#right { 
    align-self: flex-end; 
    &:hover { margin-left: 5px; }
  }
`

export const StatusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & > div {
    gap: 0.313rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > h1 {
      font-weight: 600;
      font-size: 0.938rem;
      color: var(--gray700);
    }
  }
`

export const AgreeBox = styled.div`
  gap: 0.938rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  & > div#TextBox {
    gap: 5px;
    display: flex;
    flex-direction: column;
    & > h1 {
      font-weight: 600;
      font-size: 1.5rem;
      color: var(--gray800);
    }
    & > h2 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--gray700);
    }
  }
`

export const EditBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover { filter: invert(20%) }
  }
  & h1, h2 {
    font-size: 20px;
    font-weight: 500;
    color: var(--gray800);
  }
  & h2 { color: #FF6161; }
`

export const AdminBox = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  & h1, h2 {
    font-weight: 600;
  }
  & h1 {
    font-size: 24px;
    color: var(--gray800);
  }
  & h2 {
    font-size: 18px;
    color: var(--gray700);
    & > span {
      color: var(--main900)
    }
  }
  & > div#State {

  }
  & > div#result {
    
  }
`

// Atom Components
export const Texts = styled.h1<{size: number, color: string}>`
  font-weight: 600;
  font-size: ${({size}) => size ? size + "rem" : "1rem"};
  color: var(${({color}) => color ? color : "--gray800"});
`

export const Data = styled.div`
  min-height: 50vh;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray800);
`

export const Line = styled.div`
  width: 100%;
  height: 0.063rem;
  background: var(--gray300);
  margin: 0.313rem 0 0.313rem 0;
`

export const Line_I = styled.div`
  width: 30%;
  height: 0.125rem;
  margin-top: 1.75rem;
  background: black;
`

export const Point = styled.div<{on: boolean}>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background: var(${({on}) => on ? "--main600" : "--main300"});
`

export const Report = styled.h1`
  align-self: flex-end;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--main900);
  &:hover { color: var(--main700); }
`