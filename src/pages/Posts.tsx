import { styled } from 'styled-components';
import '../styles/color.css';
import { imgPath } from '../utils/Paths';
import { Button } from '../components/Button';

export const Posts = () => {
  return <Wrapper>
    <Content>
      <Location>#기숙사_화장실</Location>
      <Title>사형제도 부활을 건의합니다</Title>
      <Line />
      <Data>
        현재 우리나라는 김대중 전 대통령 때부터 사형 집행이 중지되었습니다.. 그러다 보니 사형이라고 재판에서 판결을 내려도 피해자 및 뉴스를 보는 국민들 입장에서는 "무늬만 사형이지 가석방 없는 무기징역하고 뭐가 다르냐"라는 생각을 가질 수 밖에 없습니다.. 또한 사형이 집행되지 않다보니 요즘 흉악한 범죄를 저지르는 범죄자들이 많이 양산되고 있는 것이 현실입니다... 물론 국민이라면 인권 존중되어야 합니다. 그러나 이렇게 극악무도한 범죄를 저지른 자에 한해서는 가중처벌이 형성되야 합니다. 여기서 말하는 가중처벌이란 사형 집행일 것입니다..
        <br /><br />
        개인적으로 사형 제도가 부활하면 극악무도한 범죄자들이 줄어들 것이라 봅니다. 아니 줄어들던 그대로 똑같던 이것이 중요한 것이 아니라 조금이나마 피해자의 마음을 어루만져주기 위해서는 사형 집행이 실현 되어야 합니다. 이렇게 되는 것이 정의구현입니다.
        <br /><br />
        그리고 이러한 극악무도한 범죄자들은 체포와 동시에 국민들 앞에서 얼굴 및 신상을 공개해야 합니다. 위와 같이 인권은 중요하나 극악무도 범죄자 앞에서는 예외를 시키는 것이 국민적 공감대에도 맞다고 봅니다.
        <br /><br />
        솔직히 우리나라가 미국처럼 50년, 100년을 구형할 수 있는 사법 시스템도 마련되어 있지 않지 않습니까? 그렇기에 사형제도만이라도 부활시켜 이러한 극악무도한 범죄자들에게 피해를 입은 피해자, 혹은 유가족분들에게 조금이나마 심심한 위로를 드려야 하지 않겠습니까?
        <br /><br />
        물론 사형집행 부활이 말처럼 쉽진 않다고 봅니다. 그래도 적극 검토해 실현가능할 수 있도록 힘써주십시오..
      </Data>
      <Line />
      <Footer>
        <h1>2023-09-16</h1>
        <h1>조회수 123</h1>
      </Footer>
    </Content>
    <Interact>
      <img src={`${imgPath.P}/frame.png`} />
      <Slide>
        <div>
          접수
          <Point />
        </div>
        <Line_I />
        <div>
          검토중
          <Point />
        </div>
        <Line_I />
        <div>
          승인
          <Point />
        </div>
      </Slide>
      <Accept>
        <div id="date">
          <h1>청원 투표하기</h1>
          <h2>2023-09-16 ~ 2023-09-17</h2>
        </div>
        이 청원과 같은 생각이라면 찬성 버튼을 눌러주세요.
        <Button disabled={true} text="찬성" action={() => {}} style={{"width": "100%", "border-radius": "10px"}}/>
      </Accept>
      <Report>이 청원 신고하기</Report>
    </Interact>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 70px;
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 25px 0 25px 0;
  min-height: 87vh;
  box-sizing: border-box;
`

const Content = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: 70%;
`

const Location = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: var(--main700);
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 34px;
  color: var(--gray800);
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: var(--gray300);
  margin: 5px 0 5px 0;
`

const Data = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: var(--gray800);
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  & > h1 {
    font-size: 16px;
    font-weight: 500;
    color: var(--gray700);
  }
`

const Interact = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  & > img {
    width: 100%;
    height: auto;
  }
`

const Slide = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  & > div {
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    color: var(--gray700);
  }
`

const Line_I = styled.div`
  width: 30%;
  height: 2px;
  margin-top: 28px;
  background: black;
`

const Point = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: var(--main300);
`

const Report = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: var(--main900);
  align-self: flex-end;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    color: var(--main700);
  }
`

const Accept = styled.div`
  width: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 16px;
  color: var(--gray700);
  & > div {
    display: flex;
    align-items: center;
    gap: 5px;
    & > h1 {
      font-size: 24px;
      font-weight: 600;
      color: var(--gray800);
    }
    & > h2 {
      font-size: 13px;
      font-weight: 500;
      color: var(--gray800);
    }
  }
`

const Line_IN = styled.div`
  width: 100%;
  height: 1px;
  background: black;
`