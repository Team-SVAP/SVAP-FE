import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { IAdmin } from './Types';

import * as m from "../styles/modalStyle";
import { Button } from './common/Button';
import { postUnban } from '../apis/Ban';
import { toast } from 'react-toastify';

export const AdminBox = ({ title, petitionId, reportTime, user, banReason, userId, bannedTime, userName, bannedBy, modal}: IAdmin) => {
  const navigate = useNavigate();
  const setModal = (i?: React.ReactNode) => { modal && modal(i); }

  const handleUnban = () => {
    postUnban(userId as unknown as number).then(() => {
      toast.success(<b>{userName}님을 차단 해제했습니다</b>);
      navigate("/admin");
    }).catch(() => {}) 
  }

  const UnbanComponent = <>
    <m.Title>
      <h1>해당 유저를 차단 해제하시겠습니까</h1>
      <h4>다시 로그인이 가능해집니다</h4>
    </m.Title>
    <m.Prompt>
      <Button text="취소" action={ () => { setModal(); } } style={{background: "white", border: "1px solid var(--main400)", color: "#000"}} />
      <Button text="확인" action={ () => { setModal(); handleUnban(); }} />
    </m.Prompt>
  </> 

  return <Component onClick={() => user ? navigate(`/posts/${petitionId}`) : setModal(UnbanComponent)} id={`${userId}||${bannedBy}`}>
    <Title>
      <div>
        {user ? title : userName}
        {!user && <Date>{bannedTime}</Date>}
      </div>
      {user && <Date>{reportTime}</Date>}
      {!user && <BanReason>{banReason}</BanReason>}
    </Title>
    <h1>{user ? "자세히 보기" : "차단 해제하기"}</h1>
  </Component>
}

const Component = styled.div`
  gap: 0.313rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  cursor: pointer;
  padding: 1.138rem;
  box-sizing: border-box;
  border-radius: 0.938rem;
  border: 0.125rem solid var(--main400);
  & > h1 {
    color: var(--gray300);
    align-self: flex-end;
    font-size: 15px;
    font-weight: 500;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 28px;
  color: var(--gray700);
  & > div{
    display: flex;
    align-items: center;
    gap: 5px;
  }
`

const Date = styled.div`
  font-weight: 500;
  font-size: 17px;
  color: var(--gray700);
`

const BanReason = styled.h1`
  color: var(--gray600);
  font-weight: 500;
  font-size: 20px;
`