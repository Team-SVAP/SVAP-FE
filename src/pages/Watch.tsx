import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { imgPath } from '../utils/Paths';
import { Post } from '../components/Post';

export const Watch = () => {
  return <Wrapper>
    <Top>
      <Title>청원보기</Title>
      <SearchBar width="100%" />
      <Middle>
        <Dropdown>
        <div><Link to="/watch/posts">청원순대로 보기</Link><img src={`${imgPath.S}/Left.svg`} alt="" /></div>
          <Hidden id="hidden">
            <Link to="/watch/best">투표순으로 보기</Link>
            <Link to="/watch/accepted">승인된 청원 보기</Link>
            <Link to="watch/waiting">검토중인 청원 보기</Link>
          </Hidden>
        </Dropdown>
      <Selection>
        <h1>전체 청원</h1>
        <h1 id="selected">학교 청원</h1>
        <h1>기숙사 청원</h1>
      </Selection>
      </Middle>
      <Line />
    </Top>

    <Data>
      <Post title="새롬홀 의자 너무 딱딱해요ㅜ" date="2023-09-17" loc="학교" locDet="새롬홀" content="현재 우리나라는 김대중 전 대통령 때부터 사형 집행이 중지됐" />  
    </Data>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 16px;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  width: 50%;
  min-width: 46.625rem;
  min-height: 87vh;
`

const Title = styled.h1`
  align-self: flex-start;
  font-weight: 500;
  color: var(--gray800);
`

const Middle = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
`

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--gray000);
  padding: 5px;
  border-radius: 5px;
  & a { 
    font-size: 19px; 
    color: var(--gray700);
  }
  & > div:nth-child(1) {
    display: flex;
    gap: 15px;
  }
  &:hover {
    background: #f8f8f8;
    & > div#hidden {
      display: flex;
    }
  }
`

const Hidden = styled.div`
  display: none;
  background: #f8f8f8;
  position: absolute;
  margin-left: -5px;
  margin-top: 29px;
  flex-direction: column;
  padding: 5px;
  border-radius: 0 0 5px 5px;
  padding-right: 8px;
`

const Selection = styled.div`
  position: absolute;
  justify-self: center;
  align-self: center;
  gap: 20px;
  display: flex;
  & > h1 {
    cursor: pointer;
    transition: 0.2s all;
    font-size: 26px;
    font-weight: 500;
    color: var(--gray600);
    &:hover {
      color: var(--gray800);
    }
  }
  & > h1#selected {
    color: var(--main900);
  }
`
const Data = styled.div`
  gap: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-self: start center;
`

const Top = styled.div`
  gap: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Line = styled.div`
  width: 105%;
  height: 1px;
  background: var(--gray200);
`