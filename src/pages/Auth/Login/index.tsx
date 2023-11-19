import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { Wrapper, HeaderBox, FooterBox, MainBox } from "../Style";
import { getInfo, postLogin } from "../../../apis/User/index";
import { Button } from "../../../components/common/Button";
import { Input } from "../../../components/common/Input";
import { Cookie } from "../../../utils/Utilities";
import { imgPath } from "../../../utils/Paths";
import { IData } from "../Types";


export const Login = () => {
  const [data, setData] = useState<IData>({
    accountId: "",
    password: ""
  })
  const [visible, setVisible] = useState(false);
  const disable = (data.accountId !== "") && (data.password !== "") && (data.password.match(/[{}[\]/?.,;:)*~`|!^\-_+<>@#$%&\\=("']/g)) as unknown as boolean;
  const navigate = useNavigate();

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const {id, value} = e.currentTarget;
    setData({...data, [id]: value});
  };

  const handleLogin = () => {
    postLogin(data).then(res => {
      if(res) {
        Cookie.set("accessToken", res.data.accessToken);
        Cookie.set("refreshToken", res.data.refreshToken);
        getInfo().then(res => {
          Cookie.set("name", res.data.userName);
          Cookie.set("role", res.data.role);
          Cookie.set("accountId", res.data.accountId);
          navigate("/");
          toast.success(<b>성공적으로 로그인되었습니다</b>);
        }).catch(() => {});
      }
    }).catch(() => {})
  }

  return <>
    <Wrapper>
      <HeaderBox>Log in</HeaderBox>
      <MainBox>
        <Input
          placeholder="아이디" 
          value={data.accountId} 
          change={change} 
          id="accountId" 
          width="100%"
          height="3.438rem" 
        />
        <Input
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
              action: () => setVisible(visible => { return !visible })
            }
          }
        />
        <Button
          text="Log in"
          disabled={disable} 
          action={handleLogin}
          style={{"alignSelf": "flex-end"}}
        />
      </MainBox>
      <FooterBox>아직 가입하지 않으셨나요? <a href="/signup">회원가입</a>또는<a href="/signup?a=true">관리자 회원가입</a></FooterBox>
    </Wrapper>
  </>
}