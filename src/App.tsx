import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./styles/style";
import { Router } from "./router/Router";

export const App = () => {
  return <RecoilRoot>
    <GlobalStyle />
    <Router />
  </RecoilRoot>
}
