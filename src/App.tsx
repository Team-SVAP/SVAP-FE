import { ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './styles/style';
import { Router } from './router/Router';
import { ModalProvider } from './utils/Modal/ModalProvider';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return <RecoilRoot>
    <CookiesProvider>
      <ModalProvider>
        <ToastContainer autoClose={1000} />
        <GlobalStyle />
        <Router />
      </ModalProvider>
    </CookiesProvider>
  </RecoilRoot>
}
