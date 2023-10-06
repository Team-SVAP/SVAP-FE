import { Link, useNavigate, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { imgPath } from '../../utils/Paths';

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = pathname === "/login" || pathname === "/signup" ? true : false;

  return <Wrapper>
    <Logo src={`${imgPath.P}/Logo.png`} alt="" onClick={() => navigate("/")}/>
    <Login $page={page}>
      <Button to="/admin"> Admin </Button>
      <Button to="/login"> Login </Button>
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
  padding: 0 3.125rem 0 3.125rem;
  img { cursor: pointer; }
`

const Login = styled.div<{$page:boolean}>`
  gap: 1.25rem;
  display: ${($page) => $page ? "flex" : "none"};
`

const Logo = styled.img`
  width: 8.188rem;
  height: 3.313rem;
`

const Button = styled(Link)`
  cursor: pointer;
  padding: 0.625rem;
  transition: 0.2s all;
  box-sizing: border-box;
  border-radius: 0.938rem;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--gray700);
  :hover { background: var(--gray200); }  
`