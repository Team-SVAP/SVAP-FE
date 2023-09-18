import { styled } from 'styled-components';
import Logo from '../assets/PNG/Logo.png';

export const Header = () => {
  return <Wrapper>
    <img src={Logo} alt="" />
    <Login>
      <h1>Admin</h1>
      <h1>Login</h1>
    </Login>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.813rem;
  box-sizing: border-box;
  padding-left: 3.125rem;
  padding-right: 3.125rem;
`

const Login = styled.div`
  gap: 1.25rem;
  display: flex;
  & > h1 {
    cursor: pointer;
    padding: 0.625rem;
    transition: 0.2s all;
    box-sizing: border-box;
    border-radius: 0.938rem;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--gray700);
    &:hover { background: var(--gray200); }
  }
`