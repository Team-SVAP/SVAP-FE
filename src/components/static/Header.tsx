import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Cookies } from 'react-cookie';
import { imgPath } from '../../utils/Paths';

export const Header = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const token = cookie.get("accessToken");
  const role = cookie.get("role") === "ADMIN";
  
  const Logout = () => {
    cookie.remove("accessToken");
    cookie.remove("refreshToken");
    cookie.remove("name");
    cookie.remove("role");
    navigate("/");
  }

  return <Wrapper>
    <Logo src={`${imgPath.P}/Logo.png`} alt="" onClick={() => navigate("/")} />
    {
      !token // 토큰을 확인했을 떄
      ? <Button to="/login">Login</Button> // 토큰이 없을 경우 (로그인이 안 된 경우)
      : <UserBox> {/* 토큰이 있을 경우 (로그인이 된 경우) */}
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
                <h3 onClick={Logout}>로그아웃</h3>
            </div>

            : <div id="Buttons"> {/* 어드민일 때 */}
                <InfoButton to="/user">차단 유저 관리</InfoButton>
                <InfoButton to="/report">신고 관리</InfoButton>
                <h3 onClick={Logout}>로그아웃</h3>
            </div>
          }
        </Dropdown>
      </UserBox>
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

const Button = styled(Link)`
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
  margin-top: ${({admin}) => admin ? "15.313" : "15.938"}rem;
  & div#Name div#Buttons{
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