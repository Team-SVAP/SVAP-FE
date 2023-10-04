import { styled } from 'styled-components';
import { useState } from 'react';
import '../../styles/color.css';
import { Input } from '../../components/Input';
import { imgPath } from '../../utils/Paths';
import { Button } from '../../components/Button';
import { Wrapper, Header, Footer, Main } from './Component';

export const Login = () => {
  const [data, setData] = useState({
    "ID": "",
    "PW": ""
  })
  const [visible, setVisible] = useState(false);

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.id==="id") setData({...data, "ID": e.currentTarget.value} );
    else setData({...data, "PW": e.currentTarget.value} );
  }

  const pwVisible = () => {
  if(visible===false) setVisible(true);
  else setVisible(false);
  }

  const login = () => {
  }

  return <>
    <Wrapper>
      <Header>Log in</Header>
      <Main>
        <Input type="text" placeholder="아이디" value={data.ID} change={change} id="id" width="100%" height="3.438rem" />
        <Input 
          type={visible ? "text" : "password"}
          placeholder="비밀번호"
          value={data.PW} change={change}
          id="pw"
          width="100%"
          height="3.438rem"
          icon={{"icon":`${imgPath.S}/${visible ? "Opened.svg" : "Closed.svg"}`, action:pwVisible}}
        />
        <Button width="11.25rem" height="3.75rem" clickAble={data.ID !== "" && data.PW !== "" ? true : false} text="Log in" action={login} style={{"align-self": "flex-end"}}/>
      </Main>
      <Footer>아직 가입하지 않으셨나요? <a href="/signup">회원가입</a>또는<a href="/signup_admin">관리자 회원가입</a></Footer>
    </Wrapper>
  </>
}