import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPopularPetition } from "../../apis/Petition";
import { SearchBar } from "../../components/SearchBar";
import { imgPath } from "../../utils/Paths";
import { IBest } from "./Types";
import * as _ from "./Style";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";

export const Main = () => {
  const [best, setBest] = useState<IBest>({
    title: "",
    content: <></>,
    id: ""
  })
  const [slide, setSlide] = useState(1);
  const [fade, setFade] = useState<boolean>(false);
  const navigate = useNavigate();
  const cookie = new Cookies();

  useEffect(() => {
    const count = setInterval(() => {
      setFade(fade => !fade);
      setTimeout(() => {
        setFade(fade => !fade)
        setSlide(slide => slide === 1 ? slide+1 : slide-1);
      }, 400)
    }, 3000);
    
    return(() => {
      clearInterval(count);
    })
  }, [])

  useEffect(() => {
    getPopularPetition().then(res => {
      setBest({
        title: res.data.title,
        content: <>{(res.data.content).replaceAll("\n", <br />)}</>,
        id: res.data.id
      })
    })
  }, [])

  const handleWrite = () => {
    if(cookie.get("accessToken")) {
      navigate("/write");
    } else {
      toast.error("해당 기능은 로그인이 필요합니다");
      navigate("/login");
    }
  }

  return <>
    <_.SlideBox>
      <_.SlideItem src={`${imgPath.Sl}/${slide}.png`} key={fade ? 0 : 1} fade={fade} onClick={() => navigate(slide === 1 ? "/" : "/watch/all")}/>
    </_.SlideBox>

    <SearchBar width="45%" />

    <_.Links>
      <_.LinkButton onClick={() => navigate("/watch/all")}>
        <h1>청원 보기</h1>
        <_.Watch src={`${imgPath.S}/Watch.svg`} alt=""/>
      </_.LinkButton>
      <_.LinkButton onClick={handleWrite}>
        <h1>청원 작성</h1>
        <_.Write src={`${imgPath.S}/Write.svg`} alt=""/>
      </_.LinkButton>
    </_.Links>

    <_.Posts>
      <_.PostsTitle>
        <h1>인기 청원</h1>
        <Link to="/watch/all">더보기</Link>
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