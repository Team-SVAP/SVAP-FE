import { styled } from 'styled-components';
import { IPost } from './Types';

export const Post = ({ title, date, loc, locDet, content }: IPost) => {
  return <Component>
    <Title>
      {title}
      <Date>
        {date}
      </Date>
    </Title>
    <Type>#{loc}_{locDet}</Type>
    <Content>{content}</Content>
  </Component>
}

const Component = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 15px;
  border: 2px solid var(--main700);
  width: 100%;
  height: 120px;
  min-width: 760px;
`

const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  color: var(--gray800);
  justify-content: space-between;
`

const Date = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: var(--gray800);
`

const Type = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: var(--main700);
`

const Content = styled.div`
  color: var(--gray600);
  font-weight: 500;
  font-size: 15px;
`