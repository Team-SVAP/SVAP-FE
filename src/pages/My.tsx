import { styled } from 'styled-components';
import { Post } from '../components/Post';

export const My = () => {
  return <Wrapper>
    <Title>내가 쓴 청원 보기</Title>
    <Data>
    <Post title="새롬홀 의자 너무 딱딱해요ㅜ" date="2023-09-17" loc="학교" locDet="새롬홀" content="현재 우리나라는 김대중 전 대통령 때부터 사형 집행이 중지됐" />  
    </Data>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 50px;
  min-width: 46.625rem;
  min-height: 87vh;
`

const Title = styled.div`
  font-size: 24px;
  color: var(--gray800);
  font-weight: 500;
`

const Data = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
