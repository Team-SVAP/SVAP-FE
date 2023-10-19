import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import { Header } from "../components/static/Header";
import { Footer } from "../components/static/Footer";
import { SignUp } from "../pages/Auth/SignUp";
import { Login } from "../pages/Auth/Login";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";
import { Error } from "../pages/Error";
import { Write } from "../pages/Write";
import { Watch } from "../pages/Watch";
import { Main } from "../pages/Main";
import { My } from "../pages/My";

export const Router = () => {
  return <BrowserRouter>
    <Wrapper>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my" element={<My />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watch/:page" element={<Watch />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Page>
      <Footer />
    </Wrapper>
  </BrowserRouter>
}

const Page = styled.div`
  gap: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 87vh;
  margin-bottom: 3.125rem;
`

const Wrapper = styled(Page)` 
  gap: 0;
  flex: 0;
  margin-bottom: 0;  
`