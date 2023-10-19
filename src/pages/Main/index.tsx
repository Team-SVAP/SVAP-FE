import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPopularPetition } from "../../apis/Petition";
import { SearchBar } from "../../components/SearchBar";
import { imgPath } from "../../utils/Paths";
import { IBest } from "./Types";
import * as _ from "./Style";

export const Main = () => {
  const [best, setBest] = useState<IBest>({
    title: "",
    content: <></>,
    id: ""
  })

  useEffect(() => {
    getPopularPetition().then(res => {
      setBest({
        title: res.data.title,
        content: <>{(res.data.content).replaceAll("\n", <br />)}</>,
        id: res.data.id
      })
    })
  }, [])

  return <>
    <_.Slide src={`${imgPath.Sl}/1.png`} />

    <SearchBar width="45%" />

    <_.Links>
      <_.LinkButton to="watch/all">
        <h1>청원 보기</h1>
        <_.Watch src={`${imgPath.S}/Watch.svg`} alt=""/>
      </_.LinkButton>
      <_.LinkButton to="write">
        <h1>청원 작성</h1>
        <_.Write src={`${imgPath.S}/Write.svg`} alt=""/>
      </_.LinkButton>
    </_.Links>

    <_.Posts>
      <_.PostsTitle>
        <h1>인기 청원</h1>
        <Link to="/search/best">더보기</Link>
      </_.PostsTitle>
      <_.PostsData>
        <h1>{best.title}</h1>
        <h2>{best.content}</h2>
        <Link to={`/posts/${best.id}`}>
          <h1>전체보기</h1>
          <img src={`${imgPath.S}/Right.svg`} alt=""/>
        </Link>
      </_.PostsData>
    </_.Posts>
  </>
}