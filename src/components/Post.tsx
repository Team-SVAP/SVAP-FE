import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { IPost } from './Types';

export const Post = ({ title, date, loc, locDet, content, id }: IPost) => {
  const navigate = useNavigate();
  return <Component onClick={() => navigate(`/posts/${id}`)}>
    <Title>
      {title}
      <Date>{date}</Date>
    </Title>
    <Type>#{loc}_{locDet}</Type>
    <Content>{content.length < 90 ? content : content.substring(0, 95)+"..."}</Content>
  </Component>
}

const Component = styled.div`
  gap: 0.313rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  padding: 0.938rem;
  min-width: 47.5rem;
  box-sizing: border-box;
  border-radius: 0.938rem;
  border: 0.125rem solid var(--main700);
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--gray800);
`

const Date = styled.div`
  font-weight: 500;
  font-size: 1.063rem;
  color: var(--gray800);
`

const Type = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  color: var(--main700);
`

const Content = styled.div`
  width: 55%;
  font-weight: 500;
  font-size: 0.938rem;
  color: var(--gray600);
`