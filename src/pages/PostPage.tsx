import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import { getPostDetail } from "../apis/Petition";
import { Button } from "../components/Button";
import { postReport } from "../apis/Report";
import { imgPath } from "../utils/Paths";
import { postVote } from "../apis/Vote";
import "../styles/color.css";

export const Posts = () => {
  const { id } = useParams();
  const [, setAgreed] = useState(false);
  const [cnt, setCnt] = useState(0);
  const [data, setData] = useState({
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
    voteCounts: 0
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
        voteCounts: res.data.voteCounts
      })
    }).catch(() => {})
  }, [])

  const changeCnt = (e: React.MouseEvent<HTMLImageElement>) => {
    if(e.currentTarget.id === "left") {
      setCnt(cnt!==data.imgUrl.length-1 ? cnt+1 : 0);
    } else {
      setCnt(cnt!==0 ? cnt-1 : data.imgUrl.length-1);
    }
  }
  
  const agree = () => {
    postVote(id as unknown as number).then(() => {
      toast.success(<b>{id}번 청원에 찬성하였습니다</b>)
      localStorage.setItem(`agree${id}`, "true");
      setAgreed(true);
    }).catch(() => {})
  }

  const report = () => {
    if(localStorage.getItem(`report${id}`) !== "true") {
      postReport(id as unknown as number).then(() => {
        toast.success(<b>{id}번 청원을 신고하였습니다</b>)
        localStorage.setItem(`report${id}`, "true");
      }).catch(() => {})
    }
  }

  return <Wrapper>
    <ContentBox>
      <Location>#{data.types}_{data.location}</Location>
      <Title>{data.title}</Title>
      <Line />
      <Data>{data.content}</Data>
      <Line />
      <CountBox>
        <h1> {data.date} </h1>
        <h1> 조회수 {data.viewCounts} </h1>
      </CountBox>
    </ContentBox>
    <InteractionBox>
      <ImageBox>
        {  // 이미지 아이콘
          data.imgUrl.length > 1
          && <>
            <img src={`${imgPath.S}/Left_Post.svg`} id="left" alt="" onClick={changeCnt}/>
            <img src={`${imgPath.S}/Right_Post.svg`} id="right" alt="" onClick={changeCnt}/>
          </>
        }
        { // 이미지 표시
          data.imgUrl.length === 0
          ? <img src={`${imgPath.P}/frame.png`} alt="" /> // 이미지 배열이 비었을 경우
          : <img src={data.imgUrl[cnt]} id="image" alt="" /> // 이미지 배열이 비어있지 않을 경우
        }
      </ImageBox>
      <StatusBox>
        <div> 접수 <Point on={data.accessTypes === "NORMAL"} /></div>
        <Line_I />
        <div>검토중<Point on={data.accessTypes === "WAITING"} /></div>
        <Line_I />
        <div>승인<Point on={data.accessTypes === "APPROVAL"} /></div>
      </StatusBox>
      <AgreeBox>
        <h1>청원 투표하기</h1>
        <h2>이 청원과 같은 생각이라면 찬성 버튼을 눌러주세요.</h2>
        <Button 
          disabled={data.accessTypes === "NORMAL" && localStorage.getItem(`agree${id}`) !== "true"} 
          text="찬성" 
          action={agree}
          style={{"width": "100%", "border-radius": "10px"}}
        />
      </AgreeBox>
      <Report onClick={report}>이 청원 신고하기</Report>
    </InteractionBox>
  </Wrapper>
}

// Box Components
const Wrapper = styled.div`
  gap: 4.375rem;
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-height: 87vh;
  box-sizing: border-box;
  padding: 1.563rem 0 1.563rem 0;
`

const ContentBox = styled.div`
  gap: 0.313rem;
  display: flex;
  flex-direction: column;
  width: 70%;
`

const InteractionBox = styled.div`
  gap: 1.875rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 30%;
`

const CountBox = styled.div`
  display: flex;
  justify-content: space-between;
  & > h1 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--gray700);
  }
`

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  & > img#image {
    width: 24.375rem;
    height: 18.75rem;
    box-sizing: border-box;
    border-radius: 0.938rem;
    border: 0.125rem solid whitesmoke;
    box-shadow: 0.125rem 0.125rem 0.625rem whitesmoke;
  }
  & > img#left, img#right {
    padding: 0.625rem;
    cursor: pointer;
    position: absolute;
    transition: 0.2s all;
    filter: invert(100%);
    &:hover { filter: invert(50%) }
  }
  & > img#left { align-self: flex-start; }
  & > img#right { align-self: flex-end; }
`

const StatusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & > div {
    gap: 0.313rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: 600;
    font-size: 0.938rem;
    color: var(--gray700);
  }
`

const AgreeBox = styled.div`
  gap: 0.938rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  & > h1 {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--gray800);
  }
  & > h2 {
    font-size: 1rem;
    font-weight: 500;
    color: var(--gray700);
  }
`

// Atom Components
const Location = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--main700);
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 2.125rem;
  color: var(--gray800);
`

const Data = styled.div`
  min-height: 50vh;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--gray800);
`

const Line = styled.div`
  width: 100%;
  height: 0.063rem;
  background: var(--gray300);
  margin: 0.313rem 0 0.313rem 0;
`

const Line_I = styled.div`
  width: 30%;
  height: 0.125rem;
  margin-top: 1.75rem;
  background: black;
`

const Point = styled.div<{on: boolean}>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background: var(${({on}) => on ? "--main600" : "--main300"});
`

const Report = styled.h1`
  align-self: flex-end;
  cursor: pointer;
  transition: 0.2s all;
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--main900);
  &:hover { color: var(--main700); }
`