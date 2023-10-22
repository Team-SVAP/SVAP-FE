import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
// import { postPetition } from "../../apis/Petition";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { imgPath } from "../../utils/Paths";
import { IData, IItem } from "./Types";
import "../../styles/style";
import * as _ from "./Style";
import { Dropdown } from "../../components/Dropdown";

const Item = ({ title, value }: IItem) => {
  return <_.ItemBox>
    <h1><span>*</span>{title}</h1>
    {value}
  </_.ItemBox>
}

export const Write = () => {
  const [data, setData] = useState<IData>({
    title: "",
    content: "",
    types: "",
		location: "",
  });
  const [image, setImage] = useState<any>([]);
  const navigate = useNavigate();
  const types: any = {
    SCHOOL: "학교 청원",
    DORMITORY: "기숙사 청원"
  }
  const compare = data.title.length >= 5 && data.content.length >= 8 && data.types !== "";

  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({...data, [e.currentTarget.id]: e.currentTarget.value});
  };

  const handleType = (e: React.MouseEvent<HTMLElement>) => {
    setData({...data, types: e.currentTarget.id})
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.currentTarget.files;
    if(image && image.length <= 3) {
      const imageList = Array.from(e.currentTarget.files || []);
      setImage(imageList);
    } else {
      toast.error("사진 첨부는 3개 이하만 가능합니다.");
    }
  }

  // const submit = () => {
  //   const form = new FormData();
  //   form.append("content", data);
  //   form.append("image", image);
  //   for(let i in form.values()) {
  //     console.log(i);
  //   }
  //   postPetition(form).then(() => {
  //     navigate("/");
  //     toast.success("청원이 게시되었습니다!");
  //   }).catch(() => {})
  // }

  return <_.Wrapper>
    <_.Title>
      <h1>청원 작성하기</h1>
      <img src={`${imgPath.S}/Write.svg`} alt="" />
    </_.Title>
    <_.Interaction>
      <Item 
        title="제목" 
        value={<Input placeholder="제목을 입력하세요" value={data.title} change={handleChange} id="title" width="100%" height="3.125rem" />} 
        />
      <_.DoubleBox>
        <_.ItemBox>
          <h1><span>*</span>종류</h1>
          <Dropdown value={types} data={data.types} action={handleType}/>
        </_.ItemBox>
        <Item 
          title="위치 태그"
          value={<Input value={data.location} change={handleChange} id="location" width="100%" height="3.125rem" />} 
        />
      </_.DoubleBox>
      <Item
        title="내용" 
        value={<_.AreaInput value={data.content} id="content" onChange={handleChange}/>} 
      />
      <_.ItemBox>
        <h1>사진</h1>
        <_.Image>
          {
            image.length === 0
            ? "파일 첨부하기"
            : image.map((i: any, index: number) => {
              return (index+1!==image.length) ? `${i.name}, ` : i.name
            })
          }
          <input type="file" multiple onChange={handleImage} accept="image/png, image/jpeg, image/jpg" />
        </_.Image>
      </_.ItemBox>
    </_.Interaction>
    <Button disabled={compare ? true : false} text="청원하기" action={() => {}} style={{"placeSelf": "center end"}}/>
  </_.Wrapper>
}