import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { imgPath } from "../../utils/Paths";
import { IData, IItem } from "./Types";
import "../../styles/globalStyle";
import * as _ from "./Style";
import { Dropdown } from "../../components/Dropdown";
import { getPostDetail, patchPost, postImage, postPost } from "../../apis/Petition";
import { Id, Toast } from "react-toastify/dist/types";

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
		location: ""
  });
  const [image, setImage] = useState<any>([]);
  const navigate = useNavigate();
  const types: any = {
    SCHOOL: "학교 청원",
    DORMITORY: "기숙사 청원"
  }
  const compare = data.title.length >= 5 && data.content.length >= 8 && data.types !== "" && data.location.length >= 3 && data.location.length < 10;
  const [searchParams, ] = useSearchParams();
  const edit = searchParams.get('e');

  useEffect(() => {
    if(edit) {
      const id = searchParams.get('id');
      getPostDetail(id as unknown as number).then(res => {
        setData({
          title: res.data.title,
          content: res.data.content,
          types: res.data.types,
          location: res.data.location
        })
      })
    }
  }, [])

  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({...data, [e.currentTarget.id]: e.currentTarget.value});
  };

  const handleType = (e: React.MouseEvent<HTMLElement>) => {
    setData({...data, types: e.currentTarget.id})
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = Array.from(e.currentTarget.files || []);
    if(images && images.length <= 2) {
      setImage(images);
    } else {
      toast.error("사진 첨부는 2개 이하만 가능합니다.");
    }
  }

  const handleEdit = () => {
    const id = searchParams.get('id');
    patchPost(data, id as unknown as number).then(() => {
      toast.success(`${id}번 청원을 수정하였습니다`);
      navigate(`../posts/${id}`);
    })
  }

  const updateToast = (waiting: Id) => {
    toast.update(waiting, { render: "청원이 등록되었습니다", type: "success", isLoading: false, closeButton: true, autoClose: 1000 });
  }
  
  const submit = () => {
    const waiting = toast.loading("청원을 등록하고 있습니다")
    if(image.length !== 0) {
      const form = new FormData();
      for(let i in image) {
        form.append("image", image[i]);
      }
      postImage(form).then(res => {
        postPost(data, res.data.imageUrl).then(() => {
          navigate("/watch/all");
          updateToast(waiting);
        }).catch(() => toast.dismiss(waiting))
      }).catch(() => {})
    } else {
      postPost(data).then(() => {
        navigate("/watch/all");
        updateToast(waiting);
      }).catch(() => toast.dismiss(waiting))
    }
  }

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
        value={<_.AreaInput value={data.content} id="content" placeholder="청원의 내용을 입력하세요" onChange={handleChange}/>} 
      />
      <_.ItemBox>
        <h1>사진</h1>
        {
          !edit 
          ? <_.Image>
          {
            image.length === 0
            ? "파일 첨부하기"
            : image.map((i: any, index: number) => {
              return (index+1!==image.length) ? `${i.name}, ` : i.name
            })
          }
          <input type="file" multiple onChange={handleImage} accept="image/png, image/jpeg, image/jpg" />
        </_.Image>
        : <_.Image>이미지는 수정할 수 없어요</_.Image>
        }
      </_.ItemBox>
    </_.Interaction>
    <Button disabled={compare ? true : false} text={!edit ? "청원하기" : "수정하기"} action={!edit ? submit : handleEdit} style={{"placeSelf": "center end"}}/>
  </_.Wrapper>
}