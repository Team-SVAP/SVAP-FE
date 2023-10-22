import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import { getPostDetail } from "../../apis/Petition";
import { Button } from "../../components/common/Button";
import { postReport } from "../../apis/Report";
import { imgPath } from "../../utils/Paths";
import { postVote } from "../../apis/Vote";
import { IData } from "./Types";
import * as _ from "./Style";
import { Dropdown } from "../../components/Dropdown";

export const Detail = () => {
  const { id } = useParams();
  const [, setAgreed] = useState<boolean>(false);
  const [cnt, setCnt] = useState<number>(0);
  const [data, setData] = useState<IData>({
    accessTypes: "",
    content: <></>,
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
  const cookie = new Cookies();
  const types: any = { // 일반 데이터를 텍스트로 변환
    normal: "접수",
    wait: "검토중",
    access: "승인"
  }
  const typesData: any = { //API 데이터를 일반 데이터로 변환
    NORMAL: "normal",
    WAITING: "wait",
    APPROVAL: "access"
  }

  useEffect(() => {
    getPostDetail(id as unknown as number).then(res => {
      setData({
        accessTypes: typesData[res.data.accessTypes],
        content: <>{res.data.content.split("\n").map((i: string) => i === "" ? <><br /></> : <p>{i}</p>)}</>,
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

  const handleTypes = (e: React.MouseEvent<HTMLElement>) => {
    setData({...data, accessTypes: e.currentTarget.id});
  }

  return <_.Wrapper>
    <_.ContentBox>
      <_.Texts size={1.5} color="--main700">#{data.types}_{data.location}</_.Texts>
      <_.TitleBox>
        <_.Texts size={2.125} color="--gray800">{data.title}</_.Texts>
        <div>
          <_.Texts size={1.225} color="--gray700">{data.accountId}</_.Texts>
          { cookie.get("role") === "ADMIN" && <img src={`${imgPath.S}/Ban.svg`} alt="" title="유저 차단하기" />}
        </div>
      </_.TitleBox>
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
          <_.Point on={data.accessTypes === "normal"} />
        </div>
        <_.Line_I />
        <div>
          <h1>검토중</h1>
          <_.Point on={data.accessTypes === "wait"} />
        </div>
        <_.Line_I />
        <div>
          <h1>승인</h1>
          <_.Point on={data.accessTypes === "access"} />
        </div>
      </_.StatusBox>
      {
        cookie.get("accessToken") && <>
          <_.AgreeBox>
            {
              cookie.get("role") === "STUDENT"
              ? <>
                <h1>청원 투표하기</h1>
                <h2>이 청원과 같은 생각이라면 찬성 버튼을 눌러주세요.</h2>
                <Button 
                  disabled={data.accessTypes === "NORMAL" && localStorage.getItem(`agree${id}`) !== "true"}
                  text="찬성" 
                  action={handleAgree}
                  style={{"width": "100%", "border-radius": "10px"}}
                />
              </>
              : <_.AdminBox>
                <div id="State">
                  <h1>청원 상태 변경</h1>
                  <Dropdown value={types} data={data.accessTypes} action={handleTypes}/>
                </div>
                <div id="Result">
                  <h1>청원 결과</h1>
                  <h2>총 <span>{data.voteCounts}</span>명이 찬성 (조회자중 <span>{Math.ceil((data.voteCounts/data.viewCounts)*100)}%</span>가 찬성)</h2>
                </div>
              </_.AdminBox>
            }
          { cookie.get("role") === "STUDENT" && <>
            {
              cookie.get("accountId") !== data.accountId
              ? <_.Report onClick={handleReport}>이 청원 신고하기</_.Report>
              : <>
                <_.EditBox>
                  <div>
                    <h1>수정하기</h1>
                    <img src={`${imgPath.S}/Edit.svg`} alt="" />
                  </div>
                  <div>
                    <h2>삭제하기</h2>
                    <img src={`${imgPath.S}/Erase.svg`} alt="" />
                  </div>
                </_.EditBox>
              </>
            }
          </>
          }
          </_.AgreeBox>
        </>
      }
    </_.InteractionBox>
  </_.Wrapper>
}