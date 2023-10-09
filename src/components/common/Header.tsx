import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Cookies } from 'react-cookie';
import { imgPath } from '../../utils/Paths';
import { ILogout } from '../Types';

const Logout = ({ cookie, navigate }: ILogout) => {
  cookie.remove("accessToken");
  cookie.remove("refreshToken");
  cookie.remove("name");
  cookie.remove("role");
  navigate("/");
}

export const Header = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const role = cookie.get("role") === "ADMIN";
  
  return <Wrapper>
    <Logo src={`${imgPath.P}/Logo.png`} alt="" onClick={() => navigate("/")} />
    {
      !cookie.get("accessToken") // 토큰을 점검했을 떄
      ? <Button to="/login">Login</Button> // 토큰이 없을 경우 (로그인이 안 된 경우)
      : <Container> {/* 토큰이 있을 경우 (로그인이 된 경우) */}
        <img src={`${imgPath.S}/User.svg`} alt="" />
        <Dropdown admin={role}>
          { !role 
            ? <div id="Name"> {/* 유저일 때 */}
              <h1>{decodeURI(cookie.get("name"))}</h1>
            </div>

            : <div id="Name"> {/* 어드민일 때 */}
              <h1>{decodeURI(cookie.get("name"))}</h1>
              <h2>(관리자)</h2>
            </div>
          }
          <Line />
          {
            !role // 계정의 역할이 어드민인가? (true: 어드민, false: 유저)

            ? <div id="Buttons"> {/* 유저일 때 */}
                <InfoButton to="/my">내 청원</InfoButton> 
                <h3 onClick={() => Logout({cookie, navigate})}>로그아웃</h3>
            </div>

            : <div id="Buttons"> {/* 어드민일 때 */}
                <InfoButton to="/user">차단 유저 관리</InfoButton>
                <InfoButton to="/report">신고 관리</InfoButton>
                <h3 onClick={() => Logout({cookie, navigate})}>로그아웃</h3>
            </div>
          }
        </Dropdown>
      </Container>
    }
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.813rem;
  box-sizing: border-box;
  padding: 0 4.925rem 0 4.925rem;
  img { cursor: pointer; }
`

const Container = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    & > div {
      display: flex;
      position: absolute;
    }
  }
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
  &:hover { background: var(--gray200); }  
`

const Dropdown = styled.div<{admin: boolean}>`
  gap: 15px;
  display: none;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--gray200);
  border-radius: 15px;
  min-width: 145px;
  padding: 20px;
  box-sizing: border-box;
  background: white;
  margin-top: ${({admin}) => admin ? "245" : "225"}px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  & div#Name {
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
      font-size: 26px;
      font-weight: 600;
      color: var(--gray800);
    }
    & h2 {
      font-size: 20px;
      font-weight: 400;
      color: var(--gray600);
    }
  }
  & div#Buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & h2, h3 {
    cursor: pointer;
    transition: 0.2s all;
    color: var(--gray800);
    font-size: 20px;
    font-weight: 500;
    &:hover {
      filter: invert(20%);
    }
  }
  & h3 {
    color: var(--main900);
  }
`

const Line = styled.div`
  width: 95%;
  height: 2px;
  background: var(--gray200);
`

const InfoButton = styled(Link)`
  cursor: pointer;
  transition: 0.2s all;
  color: var(--gray800);
  font-size: 20px;
  font-weight: 500;
  &:hover {
    filter: invert(20%);
  }
  & > span {
    color: var(--main900);
  }
`

const Logo = styled.img`
  width: 8.188rem;
  height: 3.313rem;
`