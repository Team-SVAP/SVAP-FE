import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { getPosts } from '../../apis/Petition';
import { Post } from '../../components/Post';
import { imgPath } from '../../utils/Paths';
import * as _ from './Style';

export const Watch = () => {
  const [select, setSelect] = useState("normal");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState<any>();
  const loc = useLocation();
  const path = loc.pathname.split("/")
  const types: any = {
    normal: "접수된 청원만 보기",
    approval: "승인된 청원만 보기",
    waiting: "검토중인 청원만 보기",
    vote: "투표순대로 보기"
  }

  const handleTypes = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setSelect(e.currentTarget.id);
    setClicked(true);
    setTimeout(() => setClicked(false), 100);
  }

  useEffect(() => {
    const tmp = path[path.length-1];
    if(select !== "vote") { // 정렬 방식이 두개로 분리되어있음...
      getPosts(`${tmp !== "all" ? `sort/${tmp.toUpperCase()}/` : "sort-all/"}${select.toUpperCase()}`).then(res => {
        setData(res.data);
      }).catch(() => {})
    } else {
      getPosts(`vote${tmp !== "all" ? `/${tmp.toUpperCase()}` : "-all"}`).then(res => {
        setData(res.data);
      }).catch(() => {})
    }
  }, [select, loc])

  return <_.Wrapper>
    <_.Top>
      <_.Title>청원보기</_.Title>
      <SearchBar width="100%" />
      <_.Middle>
        <_.DropdownBox $clicked={clicked}>
          <div><h1>{types[select]}</h1><img src={`${imgPath.S}/Left.svg`} alt="" id="arrow"/></div>
          <_.HiddenBox id="hidden">
            <h1 onClick={handleTypes} id="normal">접수된 청원만 보기</h1>
            <h1 onClick={handleTypes} id="approval">승인된 청원만 보기</h1>
            <h1 onClick={handleTypes} id="waiting">검토중인 청원만 보기</h1>
            <h1 onClick={handleTypes} id="vote">투표순대로 보기</h1>
          </_.HiddenBox>
        </_.DropdownBox>
        <_.Selection>
          <Link to="../watch/all" id={path[path.length-1] === "all" ? "selected" : ""}>전체 청원</Link>
          <Link to="../watch/school" id={path[path.length-1] === "school" ? "selected" : ""}>학교 청원</Link>
          <Link to="../watch/dormitory" id={path[path.length-1] === "dormitory" ? "selected" : ""}>기숙사 청원</Link>
        </_.Selection>
      </_.Middle>
      <_.Line />
    </_.Top>
    <_.Data>
      {
        !data 
        ? <_.Waiting>글을 불러오는 중입니다..</_.Waiting>
        : data.map((i: any) => {
          return <Post id={i.id} key={i.id} title={i.title} date={i.dateTime} loc={i.types} locDet={i.location} content={i.content} />
        })
      }
    </_.Data>
  </_.Wrapper>
}