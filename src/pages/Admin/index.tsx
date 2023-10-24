import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { getReport } from '../../apis/Report';
import { AdminBox } from '../../components/AdminBox';
import { getBan } from '../../apis/Ban';
import { Modal } from '../../utils/Atoms';
import { useSetRecoilState } from 'recoil';

export const Admin = () => {
  const [reports, setReports] = useState<any[]>();
  const [bans, setBans] = useState<any[]>();
  const setContent = useSetRecoilState(Modal);

  useEffect(() => {
    getReport().then(res => {
      setReports(res.data);
    })
    getBan().then(res => {
      setBans(res.data);
    })
  }, [])

  const setModal = (data?: React.ReactNode) => {
    document.body.style.overflow = data ? "hidden" : "visible";
    setContent({
      open: data ? true : false,
      data: <>{data && data}</>
    })
  }

  return <Wrapper>  
    <Box>
      <Title>신고 받은 청원</Title>
      <Line />
      <Scroller>
        {
          reports?.map(i => <AdminBox title={i.title} petitionId={i.petitionId} reportTime={i.reportTime} user={true} />)
        }
      </Scroller>
    </Box>
    <Box>
      <Title>차단된 유저</Title>
      <Line />
      <Scroller>
        {
          bans?.map(i => <AdminBox userId={i.userId} userName={i.userName} bannedBy={i.bannedBy} banReason={i.banReason} bannedTime={i.bannedTime} modal={setModal} user={false} />)
        }
      </Scroller>
    </Box>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  gap: 50px;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 80vh;
  gap: 10px;
  flex-direction: column;
`

const Scroller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 80%;
  overflow-y: auto;
`

const Title = styled.div`
  margin: 10px 0 10px 0;
  color: var(--gray800);
  font-size: 38px;
  font-weight: 600;
`

const Line = styled.div`
  width: 100%;
  max-width: 525px;
  height: 1px;
  background: var(--gray800);
`