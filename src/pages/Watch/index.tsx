import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { getPosts } from '../../apis/Petition';
import { WatchType } from '../../utils/Types';
import { Post } from '../../components/Post';
import { imgPath } from '../../utils/Paths';
import * as _ from './Style';

export const Watch = () => {
  const [select, setSelect] = useState("normal");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState<any>();
  const loc = useLocation();
  const { pathname } = loc;
  const path = pathname.split("/").at(-1) as unknown as string;

  const handleTypes = (e: React.MouseEvent<HTMLHeadingElement>) => {
    setSelect(e.currentTarget.id);
    setClicked(true);
    setTimeout(() => setClicked(false), 100);
  }

  useEffect(() => {
    getPosts(path.toUpperCase(), select.toUpperCase()).then(res => {
      setData(res.data);
    }).catch(() => {})
  }, [select, loc])

  return <_.Wrapper>
    <_.Top>
      <_.Title>청원보기</_.Title>
      <SearchBar width="100%" />
      <_.Middle>
        <_.DropdownBox $clicked={clicked}>
          <div><h1>{WatchType[select]}</h1><img src={`${imgPath.S}/Left.svg`} alt="" id="arrow"/></div>
          <_.HiddenBox id="hidden">
            <h1 onClick={handleTypes} id="normal">접수된 청원만 보기</h1>
            <h1 onClick={handleTypes} id="approval">승인된 청원만 보기</h1>
            <h1 onClick={handleTypes} id="waiting">검토중인 청원만 보기</h1>
            <h1 onClick={handleTypes} id="vote">투표순대로 보기</h1>
          </_.HiddenBox>
        </_.DropdownBox>
        <_.Selection>
          <Link to="../watch/all" id={path === "all" ? "selected" : ""}>전체 청원</Link>
          <Link to="../watch/school" id={path === "school" ? "selected" : ""}>학교 청원</Link>
          <Link to="../watch/dormitory" id={path === "dormitory" ? "selected" : ""}>기숙사 청원</Link>
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