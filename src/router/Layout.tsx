import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../components/static/Header";
import { Footer } from "../components/static/Footer";

export const Layout = () => {
  return <>
    <Header />
    <Wrapper>
      <Outlet />
    </Wrapper>
    <Footer />
  </>
}

const Wrapper = styled.div`
  gap: 3.75rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 87vh;
  margin-bottom: 3.125rem;
`