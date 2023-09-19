import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import { Main } from "../pages/Main";
import { Error } from "../pages/Error";

export const Router = () => {
  return <BrowserRouter>
    <Wrapper>
      <Routes>
        <Route path="*" element={<Error/>} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Wrapper>
  </BrowserRouter>
}

const Wrapper = styled.div`
  width: 100%;
  gap: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
