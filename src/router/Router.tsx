import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../pages/Main";
import { Footer } from "../components/Footer";

export const Router = () => {
  return <BrowserRouter>
    <Header />
    <Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Wrapper>
    <Footer />
  </BrowserRouter>
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  gap: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
