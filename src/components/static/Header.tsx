import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Cookies } from 'react-cookie';
import { imgPath } from '../../utils/Paths';
import { Modal } from '../../utils/Atoms';
import { Button } from '../common/Button';
import { useSetRecoilState } from 'recoil';
import * as _ from "../../styles/modalStyle";

export const Header = () => {
  const setContent = useSetRecoilState(Modal);
  const navigate = useNavigate();
  const cookie = new Cookies();
  const role = cookie.get("role") === "ADMIN";
  const token = cookie.get("accessToken");
  
  const Logout = () => {
    cookie.remove("accessToken");
    cookie.remove("refreshToken");
    cookie.remove("name");
    cookie.remove("role");
    localStorage.clear();
    setModal();
    navigate("/");
  }

  const LogoutComponent = <>
    <_.Title>
      <h1>로그아웃 하시겠습니까?</h1>
      <h4>다시 로그인해야 합니다</h4>
    </_.Title>
    <_.Prompt>
      <Button text="취소" action={ () => { setModal(); } } style={{background: "white", border: "1px solid var(--main400)", color: "#000"}} />
      <Button text="확인" action={Logout} />
    </_.Prompt>
  </> 

  const setModal = (data?: React.ReactNode) => {
    document.body.style.overflow = data ? "hidden" : "visible";
    setContent({
      open: data ? true : false,
      data: <>{data && data}</>
    })
  }

  return <Wrapper>
    <Logo src={`${imgPath.P}/Logo.png`} alt="" onClick={() => navigate("/")} />
    {
      !token
      ? <Login to="/login">Login</Login> 
      : <UserBox>
        <img src={`${imgPath.S}/User.svg`} alt="" />
        <Dropdown admin={role}>
          <div id="Name">
            <h1>{decodeURI(cookie.get("name"))}</h1>
            { role && <h2>(관리자)</h2> }
          </div>
          <Line />
          <div id="Buttons">
            <InfoButton to={!role ? "/my" : "/admin"}>{!role ? "내 청원": "관리 페이지"}</InfoButton>
            <h3 onClick={() => setModal(LogoutComponent)}>로그아웃</h3>
          </div>
        </Dropdown>
      </UserBox>
    }
  </Wrapper>
}

const Wrapper = styled.div`
  z-index: 888;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.813rem;
  box-sizing: border-box;
  padding: 0 4.925rem 0 4.925rem;
  img { cursor: pointer; }
`

const UserBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 3.125rem;
  &:hover {
    & > div {
      display: flex;
      position: absolute;
    }
  }
`

const Login = styled(Link)`
  cursor: pointer;
  padding: 0.625rem;
  box-sizing: border-box;
  border-radius: 0.938rem;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--gray700);
  &:hover { background: var(--gray200); }  
`

const Dropdown = styled.div<{admin: boolean}>`
  gap: 0.938rem;
  display: none;
  align-items: center;
  flex-direction: column;
  padding: 1.25rem;
  min-width: 9.063rem;
  background: white;
  box-sizing: border-box;
  border-radius: 0.938rem;
  border: 0.063rem solid var(--gray200);
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
  margin-top: ${({admin}) => admin ? "15.938rem" : "13.938rem"};
  & > div#Name{
    display: flex;
    align-items: center;
    flex-direction: column;
    & h1 {
      font-weight: 600;
      font-size: 1.625rem;
      color: var(--gray800);
    }
    & h2 {
      font-weight: 400;
      font-size: 1.25rem;
      color: var(--gray600);
    }
  }
  & > div#Buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  & h2, h3 {
    cursor: pointer;
    font-weight: 500;
    font-size: 1.25rem;
    &:hover { filter: invert(20%); }
  }
  & h2 { color: var(--gray800); }
  & h3 { color: var(--main900); }
`

const Line = styled.div`
  width: 95%;
  height: 0.125rem;
  background: var(--gray200);
`

const InfoButton = styled(Link)`
  cursor: pointer;
  font-weight: 500;
  font-size: 1.25rem;
  color: var(--gray800);
  &:hover { filter: invert(20%); }
  & > span { color: var(--main900); }
`

const Logo = styled.img`
  width: 8.188rem;
  height: 3.313rem;
`