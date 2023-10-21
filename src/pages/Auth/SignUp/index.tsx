import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { getDuplication, postSignUp } from '../../../apis/Auth';
import { Button } from '../../../components/common/Button';
import { Input } from '../../../components/common/Input';
import { Wrapper, Header, Footer, Main } from '../Style';
import { imgPath } from '../../../utils/Paths';
import { useNavigate } from 'react-router-dom';
import { IVisible } from './Types';
import { IData } from '../Types';
import * as _ from "./Style";

export const SignUp = () => {
  const [data, setData] = useState<IData>({
    userName: "",
    accountId: "",
    password: ""
  });
  const [visible, setVisible] = useState<IVisible>({
    password: false,
    confirm: false
  });
  const [cnt, setCnt] = useState<number>(1);
  const [confirm, setConfirm] = useState<string>("");
  const len = {
    id: data.accountId.length,
    pw: data.password.length,
    name: data.userName && data.userName.length
  }
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.id !== "confirm") { 
      setData({ ...data, [e.currentTarget.id]: e.currentTarget.value});
    }
    else { 
      setConfirm(e.currentTarget.value);
    }
  }

  const handleSubmit = () => {
    postSignUp(data).then(() => {
      navigate("/login");
      toast.success(<b>회원 가입이 완료되었습니다</b>);
    }).catch(() => {})
  }

  const handleNext = () => {
    if(cnt === 1) {
      getDuplication({ accountId: data.accountId }).then(() => {
        setCnt(cnt => cnt+1);
      }).catch(() => {});
    }
    else { 
      setCnt(cnt => cnt+1);
    }
  }

  return <>
    <Wrapper>
      <_.Container>
        <_.Page>{cnt}/3</_.Page>
        <Header>Sign up</Header>
      </_.Container>
      <Main>
        {
          cnt === 1 && <>
            <Input 
              type="text" 
              placeholder="아이디 (영문 8자 이하)" 
              change={handleChange} id="accountId" 
              width="100%" 
              height="3.438rem" 
            />
            <Button
              disabled={len.id <= 8 && len.id >= 1 ? true : false}
              text="다음"
              action={handleNext}
              style={{"alignSelf": "flex-end"}}
            />
          </>
        }{
          cnt === 2 && <>
            <Input 
              type={visible.password ? "text" : "password"}
              placeholder="비밀번호 (영문 + 숫자 8자 이상)"
              value={data.password} 
              change={handleChange}
              id="password"
              width="100%"
              height="3.438rem"
              icon={{"icon":`${imgPath.S}/${visible.password ? "Opened.svg" : "Closed.svg"}`, action:() => setVisible({...visible, password: visible.password ? false : true })}}
            />
            <Input 
              type={visible.confirm ? "text" : "password"}
              placeholder="비밀번호 확인"
              value={confirm} 
              change={handleChange}
              id="confirm"
              width="100%"
              height="3.438rem"
              icon={{"icon":`${imgPath.S}/${visible.confirm ? "Opened.svg" : "Closed.svg"}`, action:() => setVisible({...visible, confirm: visible.confirm ? false : true })}}
            />
            <Button 
              disabled={len.pw >= 8 && len.id <= 32 && data.password === confirm && data.password.match(/[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g) ? true : false} 
              text="다음" 
              action={handleNext} 
              style={{"alignSelf": "flex-end"}}
            />
          </>
        }{
          cnt === 3 && <>
            <Input type="text" placeholder="이름" change={handleChange} id="userName" width="100%" height="3.438rem" />
            <Button disabled={len.name && len.name >= 2 && len.name && len.name <= 4 ? true : false} text="회원가입" action={handleSubmit} style={{"alignSelf": "flex-end"}}/>
          </>
        }
      </Main>
      <Footer>이미 가입하셨나요? <a href="/login">로그인</a></Footer>
    </Wrapper>
  </>
}