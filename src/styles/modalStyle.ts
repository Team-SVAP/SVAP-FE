import { styled } from "styled-components";

export const Prompt = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const AreaInput = styled.textarea`
  width: 100%;
  height: 16.875rem;
`

export const Image = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  & > img#image {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 70vh;
    transition: none;
    box-sizing: border-box;
    border-radius: 0.938rem;
    border: 0.125rem solid whitesmoke;
    box-shadow: 0.125rem 0.125rem 0.625rem whitesmoke;
  }
`