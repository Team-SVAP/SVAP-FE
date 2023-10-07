import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useState } from 'react';
import { Wrapper, Header, Footer, Main } from './Component';
import { postLogin } from '../../apis/Auth/index';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { imgPath } from '../../utils/Paths';
import '../../styles/color.css';

export const Login = () => {
  const [data, setData] = useState({
    "accountId": "",
    "password": ""
  })
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.id==="id") setData({...data, "accountId": e.currentTarget.value} );
    else setData({...data, "password": e.currentTarget.value} );
  }

  const FLogin = () => {
    postLogin(data).then(() => {
      navigate("/");
      toast.success("성공적으로 로그인되었습니다");
    }).catch(() => {})
  }

  return <>
    <Wrapper>
      <Header>Log in</Header>
      <Main>
        <Input type="text" placeholder="아이디" value={data.accountId} change={change} id="id" width="100%" height="3.438rem" />
        <Input 
          type={visible ? "text" : "password"}
          placeholder="비밀번호"
          value={data.password} 
          change={change}
          id="pw"
          width="100%"
          height="3.438rem"
          icon={{"icon":`${imgPath.S}/${visible ? "Opened.svg" : "Closed.svg"}`, action:() => setVisible(visible ? false : true)}}
        />
        <Button disabled={data.accountId !== "" && data.password !== "" ? true : false} text="Log in" action={FLogin} style={{"alignSelf": "flex-end"}}/>
      </Main>
      <Footer>아직 가입하지 않으셨나요? <a href="/signup">회원가입</a>또는<a href="/signup_admin">관리자 회원가입</a></Footer>
    </Wrapper>
  </>
}