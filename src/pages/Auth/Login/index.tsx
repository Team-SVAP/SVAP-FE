import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Cookies } from 'react-cookie';
import { useState } from 'react';
import { getInfo, postLogin } from '../../../apis/Auth/index';
import { Button } from '../../../components/common/Button';
import { Input } from '../../../components/common/Input';
import { Wrapper, Header, Footer, Main } from '../Style';
import { imgPath } from '../../../utils/Paths';
import { IData } from '../Types';

export const Login = () => {
  const [data, setData] = useState<IData>({
    accountId: "",
    password: ""
  })
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const cookie = new Cookies();

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    setData({...data, [e.currentTarget.id]: e.currentTarget.value});
  };

  const handleLogin = () => {
    postLogin(data).then(res => {
      if(res) {
        cookie.set("accessToken", res.data.accessToken);
        cookie.set("refreshToken", "refreshTEMP");
        getInfo().then(res => {
          cookie.set("name", res.data.userName);
          cookie.set("role", res.data.role);
          navigate("/");
          toast.success(<b>성공적으로 로그인되었습니다</b>);
        })
      }
    }).catch(() => {})
  }

  return <>
    <Wrapper>
      <Header>Log in</Header>
      <Main>
        <Input // ID
          placeholder="아이디" 
          value={data.accountId} 
          change={change} 
          id="accountId" 
          width="100%"
          height="3.438rem" />
        <Input // PW
          type={visible ? "text" : "password"}
          placeholder="비밀번호"
          value={data.password}
          change={change}
          id="password"
          width="100%"
          height="3.438rem"
          icon={
            {
              "icon": `${imgPath.S}/${visible ? "Opened.svg" : "Closed.svg"}`, 
              action: () => setVisible(visible ? false : true)
            }
          }
        />
        <Button // Login
          disabled={data.accountId !== "" && data.password !== ""} 
          text="Log in"
          action={handleLogin}
          style={{"alignSelf": "flex-end"}}
        />
      </Main>
      <Footer>아직 가입하지 않으셨나요? <a href="/signup">회원가입</a>또는<a href="/signup_admin">관리자 회원가입</a></Footer>
    </Wrapper>
  </>
}