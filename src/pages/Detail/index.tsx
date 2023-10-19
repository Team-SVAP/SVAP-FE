import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getPostDetail } from "../../apis/Petition";
import { Button } from "../../components/common/Button";
import { postReport } from "../../apis/Report";
import { imgPath } from "../../utils/Paths";
import { postVote } from "../../apis/Vote";
import { IData } from "./Types";
import * as _ from "./Style";

export const Detail = () => {
  const { id } = useParams();
  const [, setAgreed] = useState<boolean>(false);
  const [cnt, setCnt] = useState<number>(0);
  const [data, setData] = useState<IData>({
    accessTypes: "",
    content: "",
    id: 0,
    imgUrl: [],
    location: "",
    date: "",
    title: "",
    types: "",
    userId: 0,
    viewCounts: 0,
    voteCounts: 0,
    accountId: ""
  });

  useEffect(() => {
    getPostDetail(id as unknown as number).then(res => {
      setData({
        accessTypes: res.data.accessTypes,
        content: res.data.content,
        id: res.data.id,
        imgUrl: res.data.imgUrl !== null ? res.data.imgUrl : [],
        location: res.data.location,
        date: res.data.dateTime,
        title: res.data.title,
        types: res.data.types === "SCHOOL" ? "학교" : "기숙사",
        userId: res.data.UserId,
        viewCounts: res.data.viewCounts,
        voteCounts: res.data.voteCounts,
        accountId: res.data.accountId
      })
    }).catch(() => {})
  }, [])

  const handleCnt = (e: React.MouseEvent<HTMLImageElement>) => {
    if(e.currentTarget.id === "left") {
      setCnt(cnt!==data.imgUrl.length-1 ? cnt+1 : 0);
    } else {
      setCnt(cnt!==0 ? cnt-1 : data.imgUrl.length-1);
    }
  }
  
  const handleAgree = () => {
    postVote(id as unknown as number).then(() => {
      toast.success(<b>{id}번 청원에 찬성하였습니다</b>)
      localStorage.setItem(`agree${id}`, "true");
      setAgreed(true);
    }).catch(() => {})
  }

  const handleReport = () => {
    if(localStorage.getItem(`report${id}`) !== "true") {
      postReport(id as unknown as number).then(() => {
        toast.success(<b>{id}번 청원을 신고하였습니다</b>)
        localStorage.setItem(`report${id}`, "true");
      }).catch(() => {})
    }
  }

  return <_.Wrapper>
    <_.ContentBox>
      <_.Texts size={1.5} color="--main700">#{data.types}_{data.location}</_.Texts>
      <_.Texts size={2.125} color="--gray800">{data.title}</_.Texts>
      <_.Line />
      <_.Data>{data.content}</_.Data>
      <_.Line />
      <_.CountBox>
        <h1>{data.date}</h1>
        <h1>조회수 {data.viewCounts}</h1>
      </_.CountBox>
    </_.ContentBox>
    <_.InteractionBox>
      <_.ImageBox>
        {  // 이미지 아이콘
          data.imgUrl.length > 1
          && <>
            <img src={`${imgPath.S}/Left_Post.svg`} id="left" alt="" onClick={handleCnt}/>
            <img src={`${imgPath.S}/Right_Post.svg`} id="right" alt="" onClick={handleCnt}/>
          </>
        }
        { // 이미지 표시
          data.imgUrl.length === 0
          ? <img src={`${imgPath.P}/frame.png`} alt="" /> // 이미지 배열이 비었을 경우
          : <img src={data.imgUrl[cnt]} id="image" alt="" /> // 이미지 배열이 비어있지 않을 경우
        }
      </_.ImageBox>
      <_.StatusBox>
        <div>
          <h1>접수</h1>
          <_.Point on={data.accessTypes === "NORMAL"} />
        </div>
        <_.Line_I />
        <div>
          <h1>검토중</h1>
          <_.Point on={data.accessTypes === "WAITING"} />
        </div>
        <_.Line_I />
        <div>
          <h1>승인</h1>
          <_.Point on={data.accessTypes === "APPROVAL"} />
        </div>
      </_.StatusBox>
      <_.AgreeBox>
        <h1>청원 투표하기</h1>
        <h2>이 청원과 같은 생각이라면 찬성 버튼을 눌러주세요.</h2>
        <Button 
          disabled={data.accessTypes === "NORMAL" && localStorage.getItem(`agree${id}`) !== "true"}
          text="찬성" 
          action={handleAgree}
          style={{"width": "100%", "border-radius": "10px"}}
        />
      </_.AgreeBox>
      <_.Report onClick={handleReport}>이 청원 신고하기</_.Report>
    </_.InteractionBox>
  </_.Wrapper>
}