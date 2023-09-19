import { Router } from "./router/Router";
import { GlobalStyle } from "./styles/style";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { styled } from "styled-components";

export const App = () => {
  return <>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Router />
      <Footer />
    </Wrapper>
  </>
}

const Wrapper = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`
