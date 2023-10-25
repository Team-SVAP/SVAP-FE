import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import { useState } from "react";
import { getDuplication, postAdminSignUp, postSignUp } from "../../../apis/User";
import { Wrapper, HeaderBox, FooterBox, MainBox } from "../Style";
import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { imgPath } from "../../../utils/Paths";
import { IData, IAuth } from "../Types";
import * as _ from "./Style";

export const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IData>({
    userName: "",
    accountId: "",
    password: ""
  });
  const [auth, setAuth] = useState<IAuth>({
    visible: false,
    confirm: "",
    code: "",
    cnt: 1
  })
  const disable = {
    id: (data.accountId.length <= 8) && (data.accountId.length >= 1),
    pw: (data.password.length) >= 8 && (data.password.match(/[{}[\]/?.,;:)*~`|!^\-_+<>@#$%&\\=("']/g)) && (data.password === auth.confirm),
    name: (data.userName) && (data.userName.length >= 2) && (data.userName.length <= 4),
    code: (auth.code.length >= 1)
  }
  const [searchParams, ] = useSearchParams();
  const admin = searchParams.get("a");
  const cookie = new Cookies();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.id.includes("_")) { 
      setAuth({...auth, [e.currentTarget.id.replaceAll("_", "")]: e.currentTarget.value})
    } else {
      setData({ ...data, [e.currentTarget.id]: e.currentTarget.value});
    }
  }
  
  const handleSubmit = () => {
    postSignUp(data).then(() => {
      handleAfter();
    }).catch(() => {})
  }

  const handleAdminSubmit = () => {
    postAdminSignUp(data, auth.code).then(() => {
      handleAfter();
    }).catch(() => {})
  }

  const handleAfter = () => {
    navigate("/login");
    toast.success(<b>회원 가입이 완료되었습니다</b>);
  }

  const handleNext = () => {
    if(auth.cnt === 1) {
      getDuplication({ accountId: data.accountId }).then(() => {
        setAuth({...auth, cnt: auth.cnt+1 });
      }).catch(() => {});
    } else { 
      setAuth({...auth, cnt: auth.cnt+1 });
    }
  }

  return <>
    <Wrapper>
      <_.HeaderBox>
        <_.CountItem>{auth.cnt}/{!admin ? "3" : "4"}</_.CountItem>
        <div>
          <HeaderBox>Sign up</HeaderBox>
          { admin && <h2>(관리자용)</h2>}
        </div>
      </_.HeaderBox>
      <MainBox>
        { // 1번 (ID)
          auth.cnt === 1 && <>
            <Input 
              type="text" 
              placeholder="아이디 (영문 8자 이하)" 
              change={handleChange} 
              id="accountId" 
              width="100%"
              height="3.438rem" 
            />
            <Button
              text="다음"
              disabled={disable.id}
              action={handleNext}
              style={{"alignSelf": "flex-end"}}
            />
          </>
        }{ // 2번 (비밀번호)
          auth.cnt === 2 && <>
            <Input 
              width="100%"
              id="password"
              height="3.438rem"
              value={data.password} 
              change={handleChange}
              type={auth.visible ? "text" : "password"}
              placeholder="비밀번호 (영문 + 특수문자 + 숫자 8자 이상)"
              icon={ 
                {
                  "icon":`${imgPath.S}/${auth.visible ? "Opened.svg" : "Closed.svg"}`, 
                  action:() => setAuth({...auth, visible: !auth.visible})
                } 
              }
            />
            <Input 
              id="_confirm"
              width="100%"
              value={auth.confirm}
              height="3.438rem"
              change={handleChange}
              placeholder="비밀번호 확인"
              type={auth.visible ? "text" : "password"}
              icon={ 
                {
                  "icon":`${imgPath.S}/${auth.visible ? "Opened.svg" : "Closed.svg"}`, 
                  action:() => setAuth({...auth, visible: !auth.visible})
                } 
              }
            />
            <Button 
              text="다음" 
              action={handleNext} 
              style={ {"alignSelf": "flex-end"} }
              disabled={disable.pw as unknown as boolean} 
            />
          </>
        }{ // 3번 (이름)
          auth.cnt === 3 && <>
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
              disabled={disable.name as unknown as boolean}
            />
          </>
        }{ // 4번 (관리코드, 어드민용)
          auth.cnt === 4 && <>
            <Input 
              type="text"
              width="100%"
              id="_code"
              height="3.438rem"
              placeholder="관리자용 코드 입력"
              change={handleChange}
            />
            <Button 
              text="회원가입" 
              action={handleAdminSubmit}
              style={ {"alignSelf": "flex-end"} }
              disabled={disable.code as unknown as boolean} 
            />
          </>
        }
      </MainBox>
      <FooterBox>이미 가입하셨나요? <a href="/login">로그인</a></FooterBox>
    </Wrapper>
  </>
}