import { styled } from 'styled-components';
import { Wrapper, Header, Footer, Main } from './Component';
import '../../styles/color.css';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { imgPath } from '../../utils/Paths';
import React from 'react';
import { getDuplication, postSignUp } from '../../apis/Auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { getDuplication } from '../../apis/Auth';

type TId = {
  key: string,
  value: string
}

export const SignUp = () => {
  const [data, setData] = useState({
    userName: "",
    accountId: "",
    password: ""
  });
  const [cnt, setCnt] = useState(1);
  const [visible, setVisible] = useState({
    password: false,
    confirm: false
  });
  const [confirm, setConfirm] = useState("");
  const len = {
    id: data.accountId.length,
    pw: data.password.length,
    name: data.userName.length
  }
  const navigate = useNavigate();

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.id !== "confirm") { 
      setData({ ...data, [e.currentTarget.id]: e.currentTarget.value});
    }
    else setConfirm(e.currentTarget.value);
  }

  const submit = () => {
    postSignUp(data).then(() => {
      navigate("/login");
      toast.success(<b>회원 가입이 완료되었습니다</b>);
    }).catch(() => {})
  }

  const next = () => {
    if(cnt === 1) {
      getDuplication({ accountId: data.accountId }).then(res => {
        setCnt(cnt => cnt+1);
      }).catch(() => {});
    }
    else setCnt(cnt => cnt+1);
  }

  return <>
    <Wrapper>
      <Container>
        <Page>{cnt}/3</Page>
        <Header>Sign up</Header>
      </Container>
      <Main>
        {
          cnt === 1 && <>
            <Input type="text" placeholder="아이디 (영문 8자 이하)" change={change} id="accountId" width="100%" height="3.438rem" />
            <Button disabled={len.id <= 8 && len.id >= 1 ? true : false} text="다음" action={next} style={{"alignSelf": "flex-end"}}/>
          </>
        }{
          cnt === 2 && <>
            <Input 
              type={visible.password ? "text" : "password"}
              placeholder="비밀번호 (영문 + 숫자 8자 이상)"
              value={data.password} 
              change={change}
              id="password"
              width="100%"
              height="3.438rem"
              icon={{"icon":`${imgPath.S}/${visible.password ? "Opened.svg" : "Closed.svg"}`, action:() => setVisible({...visible, password: visible.password ? false : true })}}
            />
            <Input 
              type={visible.confirm ? "text" : "password"}
              placeholder="비밀번호 확인"
              value={confirm} 
              change={change}
              id="confirm"
              width="100%"
              height="3.438rem"
              icon={{"icon":`${imgPath.S}/${visible.confirm ? "Opened.svg" : "Closed.svg"}`, action:() => setVisible({...visible, confirm: visible.confirm ? false : true })}}
            />
            <Button disabled={len.pw >= 8 && len.id <= 32 && data.password === confirm && data.password.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g) ? true : false} text="다음" action={next} style={{"alignSelf": "flex-end"}}/>
          </>
        }{
          cnt === 3 && <>
            <Input type="text" placeholder="이름" change={change} id="userName" width="100%" height="3.438rem" />
            <Button disabled={len.name >= 2 && len.name <= 4 ? true : false} text="회원가입" action={submit} style={{"alignSelf": "flex-end"}}/>
          </>
        }
      </Main>
      <Footer>이미 가입하셨나요? <a href="/login">로그인</a></Footer>
    </Wrapper>
  </>
}

const Container = styled.div`
  place-self: start;
  width: 100%;
  gap: 5vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Page = styled.h1`
  align-self: flex-end;
  font-size: 30px;
  font-weight: 500px;
  color: var(--gray600);
`

// width="11.25rem" height="3.75rem"