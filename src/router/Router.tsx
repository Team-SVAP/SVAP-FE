import { Routes, Route, HashRouter } from "react-router-dom";
import { SignUp } from "../pages/Auth/SignUp";
import { Login } from "../pages/Auth/Login";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";
import { Error } from "../pages/Error";
import { Write } from "../pages/Write";
import { Watch } from "../pages/Watch";
import { Admin } from "../pages/Admin";
import { Main } from "../pages/Main";
import { Layout } from "./Layout";
import { My } from "../pages/My";

export const Router = () => {
  return <HashRouter basename="/">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Main />} />
        <Route path="search" element={<Search />} />
        <Route path="my" element={<My />} />
        <Route path="write" element={<Write />} />
        <Route path="login" element={<Login />} />
        <Route path="watch/:page" element={<Watch />} />
        <Route path="posts/:id" element={<Detail />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<Error/>} />
    </Routes>
  </HashRouter>
}