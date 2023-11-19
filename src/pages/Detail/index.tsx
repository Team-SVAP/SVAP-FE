import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
import { deletePost, getPostDetail, patchState } from "../../apis/Petition";
import { Button } from "../../components/common/Button";
import { Dropdown } from "../../components/Dropdown";
import { Cookie } from "../../utils/Utilities";
import { postReport } from "../../apis/Report";
import * as m from "../../styles/modalStyle";
import { imgPath } from "../../utils/Paths";
import { postVote } from "../../apis/Vote";
import { Modal } from "../../utils/Atoms";
import { postBan } from "../../apis/Ban";
import { IData } from "./Types";
import * as _ from "./Style";

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
    viewCounts: 0,
    voteCounts: 0,
    accountId: ""
  });
  const types: any = { // 일반 데이터를 텍스트로 변환
    normal: "접수",
    wait: "검토중",
    access: "승인"
  }
  const typesAPI: any = { // API 데이터를 일반 데이터로 변환
    NORMAL: "normal",
    WAITING: "wait",
    APPROVAL: "access"
  }
  const setContent = useSetRecoilState(Modal);
  const navigate = useNavigate();
  const ban = useRef("");

  useEffect(() => {
    getPostDetail(id as unknown as number).then(res => {
      setData({
        accessTypes: typesAPI[res.data.accessTypes],
        content: <>{res.data.content.split("\n").map((i: string, key: number) => i === "" ? <><br /></> : <p key={key}>{i}</p>)}</>,
        id: res.data.id,
        imgUrl: res.data.imgUrl !== null ? res.data.imgUrl : [],
        location: res.data.location,
        date: res.data.dateTime,
        title: res.data.title,
        types: res.data.types === "SCHOOL" ? "학교" : "기숙사",
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
      if(localStorage.getItem(`agree${id}`) !== "true") {
        toast.success(<b>청원에 찬성하였습니다</b>)
        localStorage.setItem(`agree${id}`, "true");
      } else {
        toast.success(<b>찬성을 취소하였습니다</b>)
        localStorage.removeItem(`agree${id}`);
      }
      setAgreed(agree => !agree);
    }).catch(() => {})
  }

  const handleReport = () => {
    setModal();
    if(localStorage.getItem(`report${id}`) !== "true") {
      postReport(id as unknown as number).then(() => {
        toast.success(<b>청원을 신고하였습니다</b>)
        localStorage.setItem(`report${id}`, "true");
      }).catch(() => {})
    } else {
      toast.error(<b>이미 신고되었습니다</b>)
    }
  }

  const handleTypes = (e: React.MouseEvent<HTMLElement>) => {
    const tmp = e.currentTarget.id;
    setData({...data, accessTypes: e.currentTarget.id});
    patchState(e.currentTarget.id, id as unknown as number).then(() => {
      toast.success(<b>상태를 {types[tmp]}(으)로 변경하였습니다</b>)
    })
  }

  const handleDelete = () => {
    setModal();
    deletePost(id as unknown as number).then(() => {
      toast.success(<b>해당 글을 삭제했습니다.</b>)
      navigate("/watch/all");
    }).catch(() => {})
  }

  const handleBan = () => {
    setModal();
    postBan(data.accountId, ban.current).then(() => {
      toast.success(<b>{data.accountId}를 차단하였습니다</b>)
      navigate("/watch/all");
    }).catch(() => {});
  }

  const handleBanInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    ban.current = e.currentTarget.value;
  }

  const setModal = (data?: React.ReactNode) => {
    document.body.style.overflow = data ? "hidden" : "visible";
    setContent({
      open: data ? true : false,
      data: <>{data && data}</>
    })
  }

  const DeleteComponent = <>
    <m.Title>
      <h1>글을 삭제하시겠습니까?</h1>
      <h4>해당 작업은 되돌릴 수 없습니다</h4>
    </m.Title>
    <m.Prompt>
      <Button text="취소" action={() => setModal()} style={{background: "white", border: "1px solid var(--main400)", color: "#000"}} />
      <Button text="확인" action={handleDelete} />
    </m.Prompt>
  </> 

  const ReportComponent = <>
    <m.Title>
      <h1>글을 신고하시겠습니까?</h1>
      <h4>해당 작업은 되돌릴 수 없습니다</h4>
    </m.Title>
    <m.Prompt>
      <Button text="취소" action={() => setModal()} style={{background: "white", border: "1px solid var(--main400)", color: "#000"}} />
      <Button text="확인" action={handleReport} />
    </m.Prompt>
  </> 

  const BanComponent = <>
    <m.Title>
      <h1>해당 유저를 차단하시겠습니까?</h1>
      <h4>해당 유저는 앞으로 로그인할 수 없게 됩니다</h4>
    </m.Title>
    <m.AreaInput placeholder="밴 사유를 입력하세요" onChange={handleBanInput} />
    <m.Prompt>
      <Button text="취소" action={() => setModal()} style={{background: "white", border: "1px solid var(--main400)", color: "#000"}} />
      <Button text="확인" action={handleBan} />
    </m.Prompt>
  </> 

  const ZoomComponent = <>
    <m.Image>
      <img src={data.imgUrl[cnt]} id="image" alt="" onClick={() => setModal(ZoomComponent)} />
    </m.Image>
    <m.Prompt>
      <Button text="닫기" action={() => setModal()} style={{background: "white", border: "1px solid var(--main400)", color: "#000"}} />
    </m.Prompt>
  </> 

  const EditComponent = () => {
    return <_.EditBox>
      <div>
        <h1 onClick={() => navigate(`../write?e=true&id=${id}`)}>수정하기</h1>
        <img src={`${imgPath.S}/Edit.svg`} alt="" />
      </div>
      <div>
        <h2 onClick={() => setModal(DeleteComponent)}>삭제하기</h2>
        <img src={`${imgPath.S}/Erase.svg`} alt="" />
      </div>
    </_.EditBox>
  }

  return <_.Wrapper>
    <_.ContentBox>
      <_.Texts size={1.5} color="--main700">#{data.types}_{data.location}</_.Texts>
      <_.TitleBox>
        <_.Texts size={2.125} color="--gray800">{data.title}</_.Texts>
        <div>
          <_.Texts size={1.225} color="--gray700">{data.accountId}</_.Texts>
          { Cookie.get("role") === "ADMIN" && <img src={`${imgPath.S}/Ban.svg`} alt="" title="유저 차단하기" onClick={() => setModal(BanComponent)} />}
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
          : <img src={data.imgUrl[cnt]} id="image" alt=""  onClick={() => setModal(ZoomComponent)}  /> // 이미지 배열이 비어있지 않을 경우
        }
        { // 이미지 갯수
          data.imgUrl.length > 1
          && <div id="dots">
            { 
              data.imgUrl.map((v: any, i: number) => <div key={i} id={`${cnt === i && "selected"}`} />)
            }
          </div>
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
        Cookie.get("accessToken") && <>
          <_.AgreeBox>
            {
              Cookie.get("role") === "STUDENT"
              ? <>
                <div id="TextBox">
                  <h1>청원 투표하기</h1>
                  <h2>이 청원과 같은 생각이라면 찬성 버튼을 눌러주세요.</h2>
                </div>
                <Button 
                  disabled={data.accessTypes === "normal"}
                  text={localStorage.getItem(`agree${id}`) !== "true" ? "찬성" : "찬성 취소"} 
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
          { Cookie.get("role") === "STUDENT" 
          ? <>
            {
              Cookie.get("accountId") !== data.accountId
              ? <_.Report onClick={() => setModal(ReportComponent)}>이 청원 신고하기</_.Report>
              : <EditComponent />
            }
          </>
          : <EditComponent />
          }
          </_.AgreeBox>
        </>
      }
    </_.InteractionBox>
  </_.Wrapper>
}