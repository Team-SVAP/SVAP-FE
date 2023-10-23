import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { getDuplication, postAdminSignUp, postSignUp } from "../../../apis/Auth";
import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Wrapper, Header, Footer, Main } from "../Style";
import { imgPath } from "../../../utils/Paths";
import { IData } from "../Types";
import * as _ from "./Style";

export const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IData>({
    userName: "",
    accountId: "",
    password: ""
  });
  const [code, setCode] = useState("");
  const [visible, setVisible] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [cnt, setCnt] = useState(1);
  const len = {
    id: (data.accountId.length <= 8) && (data.accountId.length >= 1),
    pw: (data.password.length) >= 8 && (data.password.match(/[{}[\]/?.,;:)*~`|!^\-_+<>@#$%&\\=('"]/g)) && (data.password === confirm),
    name: data.userName && (data.userName.length >= 2) && (data.userName.length <= 4),
    code: code.length >= 1
  }
  const [searchParams, ] = useSearchParams();
  const admin = searchParams.get('a');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.id == "confirm") { 
      setConfirm(e.currentTarget.value);
    } else if(e.currentTarget.id === "code") {
      setCode(e.currentTarget.value);
    } else {
      setData({ ...data, [e.currentTarget.id]: e.currentTarget.value});
    }
  }

  const handleSubmit = () => {
    postSignUp(data).then(() => {
      navigate("/login");
      toast.success(<b>회원 가입이 완료되었습니다</b>);
    }).catch(() => {})
  }

  const handleAdminSubmit = () => {
    postAdminSignUp(data, code).then(() => {
      navigate("/login");
      toast.success(<b>어드민 회원 가입이 완료되었습니다</b>);
    }).catch(() => {})
  }

  const handleNext = () => {
    if(cnt === 1) {
      getDuplication({ accountId: data.accountId }).then(() => {
        setCnt(cnt => cnt+1);
      }).catch(() => {});
    } else { 
      setCnt(cnt => cnt+1);
    }
  }

  return <>
    <Wrapper>
      <_.Container>
        <_.Page>{cnt}/{!admin ? "3" : "4"}</_.Page>
        <div>
          <Header>Sign up</Header>
          { admin && <h2>(관리자용)</h2>}
        </div>
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
              text="다음"
              disabled={len.id}
              action={handleNext}
              style={{"alignSelf": "flex-end"}}
            />
          </>
        }{
          cnt === 2 && <>
            <Input 
              width="100%"
              id="password"
              height="3.438rem"
              value={data.password} 
              change={handleChange}
              type={visible ? "text" : "password"}
              placeholder="비밀번호 (영문 + 숫자 8자 이상)"
              icon={ {"icon":`${imgPath.S}/${visible ? "Opened.svg" : "Closed.svg"}`, action:() => setVisible(visible => !visible)} }
            />
            <Input 
              id="confirm"
              width="100%"
              value={confirm}
              height="3.438rem"
              change={handleChange}
              placeholder="비밀번호 확인"
              type={visible ? "text" : "password"}
              icon={ {"icon":`${imgPath.S}/${visible ? "Opened.svg" : "Closed.svg"}`, action:() => setVisible(visible => !visible)} }
            />
            <Button 
              text="다음" 
              action={handleNext} 
              style={ {"alignSelf": "flex-end"} }
              disabled={len.pw as unknown as boolean} 
            />
          </>
        }{
          cnt === 3 && <>
            <Input 
              type="text"
              width="100%"
              id="userName"
              height="3.438rem"
              placeholder="이름"
              change={handleChange}
            />
            <Button 
              text="회원가입" 
              action={!admin ? handleSubmit : handleNext}
              style={ {"alignSelf": "flex-end"} }
              disabled={len.name as unknown as boolean}
            />
          </>
        }{
          cnt === 4 && <>
            <Input 
              type="text"
              width="100%"
              id="code"
              height="3.438rem"
              placeholder="관리자용 코드 입력"
              change={handleChange}
            />
            <Button 
              text="회원가입" 
              action={handleAdminSubmit}
              style={ {"alignSelf": "flex-end"} }
              disabled={len.code as unknown as boolean} 
            />
          </>
        }
      </Main>
      <Footer>이미 가입하셨나요? <a href="/login">로그인</a></Footer>
    </Wrapper>
  </>
}