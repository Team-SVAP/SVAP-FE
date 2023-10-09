import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Input } from '../components/Input';
import '../styles/style';
import { useState } from 'react';
import { Button } from '../components/Button';
import { imgPath } from '../utils/Paths';
import { toast } from 'react-toastify';
import { postPetition } from '../apis/Petition';

interface IItem {
  title: string;
  value: React.ReactNode;
}

const Item = ({ title, value }: IItem) => {
  return <ItemContainer>
    <h1><span>*</span>{title}</h1>
    {value}
  </ItemContainer>
}

export const Write = () => {
  const [data, setData]: any = useState({
    title: "",
    content: "",
    types: "",
		location: "",
  });
  const navigate = useNavigate();

  const [image, setImage] = useState([] as any);

  const change = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    let tmp = { ...data };
    tmp[e.currentTarget.id] = e.currentTarget.value;
    setData(tmp);
  };

  const clickDropdown = (e: React.MouseEvent<HTMLElement>) => {
    const result = e.currentTarget.innerText;
    setData({...data, types: result})
  }

  const submit = () => {
    let formData = new FormData();
    formData.append("content", data);
    formData.append("image", image);
    
    postPetition(formData).then(() => {
      navigate("/");
      toast.success("청원이 게시되었습니다!");
    }).catch(() => {})
  }

  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.currentTarget.files && e.currentTarget.files.length <= 3) {
      const imageList = Array.from(e.currentTarget.files || [])
      setImage(imageList);
    } else {
      toast.error("사진 첨부는 3개 이하만 가능합니다.")
    }
  }

  return <Wrapper>
    <Title>청원 작성하기 <img src={`${imgPath.S}/Write.svg`} alt="" /></Title>
    <Container>
      <Item title="제목" value={<Input placeholder="제목을 입력하세요" value={data.title} change={change} id="title" width="100%" height="3.125rem" />} />
      <DoubleContainer>
        <ItemContainer>
          <h1><span>*</span>종류</h1>
          <Dropdown>
            <div id="box">
              <h1 id="now">{data.types}</h1>
              <img src={`${imgPath.S}/Left.svg`} alt="" />
            </div>
            <div id="hidden">
              <h1 onClick={clickDropdown}>학교 청원</h1>
              <h1 onClick={clickDropdown}>기숙사 청원</h1>
            </div>
          </Dropdown>
        </ItemContainer>
        <Item title="위치 태그" value={<Input value={data.location} change={change} id="location" width="100%" height="3.125rem" />} />
      </DoubleContainer>
      <Item title="내용" value={<AreaInput value={data.content} id="content" onChange={change}/>} />
      <ItemContainer>
          <h1>사진</h1>
          <Image>
            {
              image.length === 0
              ? "파일 첨부하기"
              : image.map((i: any, index: number) => {
                return (index+1!==image.length) ? `${i.name}, ` : i.name
              })
            }
            <input type="file" multiple onChange={changeImage} accept="image/png, image/jpeg, image/jpg" />
          </Image>
      </ItemContainer>
    </Container>
    <Button disabled={data.title.length >= 5 && data.content.length >= 8 && data.types !== "" ? true : false} text="청원하기" action={submit} style={{"placeSelf": "center end"}}/>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 50px;
  width: 33.25rem;
  display: grid;
  place-items: center;
`

const DoubleContainer = styled.div`
  gap: 25px;
  display: flex;
`

const Title = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  color: var(--gray700);
  place-self: center center;
`

const Container = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h1 {
    font-size: 20px;
    font-weight: 500;
    color: var(--gray700);
    span {
      color: red;
      font-weight: 300;
    }
  }
`

const AreaInput = styled.textarea`
  width: 100%;
  height: 270px;
  resize: none;
`

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.125rem;
  border-radius: 1rem;
  padding: 0 2.25rem 0 2.25rem;
  box-sizing: border-box;
  border: 0.125rem solid var(--gray300);
  cursor: pointer;
  & > div#box{
    width: 100%;
    height: 3.125rem;
    display: grid;
    place-items: center center;
    grid-template-columns: 95% 5%;
    & img {
      place-self: center end;
    }
    & h1 {
      place-self: center center;
    }
  }
  & > div#hidden {
    gap: 10px;
    display: none;
    align-items: center;
    flex-direction: column;
    padding: 10px 0 10px 0;
    box-sizing: border-box;
    transition: 0.2s all;
    width: 252.5px;
    height: 100px;
    border-radius: 0 0 1rem 1rem;
    border: 0.125rem solid var(--main700);
    border-top: none;
    background: white;
    position: absolute;
    margin-top: 45px;
    & h1 {
      transition: 0.2s all;
      width: 70%;
      text-align: center;
      background: white;
      border-radius: 10px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
  &:hover {
    border: 0.125rem solid var(--main700);
    border-bottom: none;
    border-radius: 1rem 1rem 0 0;
    & img { transform: rotate(-90deg); }
    & > div#hidden {
      display: flex;
    }
  }
`

const Image = styled.label`
  display: flex;
  align-items: center;
  min-height: 3.125rem;
  border: 0.125rem solid var(--gray300);
  cursor: pointer;
  & > input {
    display: none;
  }
  &:focus-within {
    border: 0.125rem solid var(--gray300);
  }
`