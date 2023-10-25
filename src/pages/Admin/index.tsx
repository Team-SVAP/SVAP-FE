import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { AdminBox } from "../../components/AdminBox";
import { getReport } from "../../apis/Report";
import { Modal } from "../../utils/Atoms";
import { getBan } from "../../apis/Ban";
import * as _ from "./Style";

export const Admin = () => {
  const [reports, setReports] = useState<any[]>();
  const [bans, setBans] = useState<any[]>();
  const setContent = useSetRecoilState(Modal);

  useEffect(() => {
    getReport().then(res => setReports(res.data))
    getBan().then(res => setBans(res.data))
  }, [])

  const setModal = (data?: React.ReactNode) => {
    document.body.style.overflow = data ? "hidden" : "visible";
    setContent({
      open: data ? true : false,
      data: <>{data && data}</>
    })
  }

  return <_.Wrapper>  
    <_.ContentBox>
      <_.TitleItem>신고 받은 청원</_.TitleItem>
      <_.LineItem />
      <_.ScrollBox>
        {
          reports?.map(i => <AdminBox 
            title={i.title} 
            petitionId={i.petitionId}
            reportTime={i.reportTime}
            user={true} 
            />
          )
        }
      </_.ScrollBox>
    </_.ContentBox>
    <_.ContentBox>
      <_.TitleItem>차단된 유저</_.TitleItem>
      <_.LineItem />
      <_.ScrollBox>
        {
          bans?.map(i => <AdminBox 
            userId={i.userId} 
            userName={i.userName} 
            bannedBy={i.bannedBy} 
            banReason={i.banReason} 
            bannedTime={i.bannedTime} 
            modal={setModal} 
            user={false} 
            />
          )
        }
      </_.ScrollBox>
    </_.ContentBox>
  </_.Wrapper>
}