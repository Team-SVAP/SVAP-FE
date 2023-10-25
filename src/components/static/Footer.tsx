import { styled } from 'styled-components';
import { imgPath } from '../../utils/Paths';
import '../../styles/color.css';

export const Footer = () => {
  return <Wrapper>
    <Interactions>
      <Developers>
        <div>
          <h1>BackEnd</h1>
          <a href="https://github.com/ilyoil2">강태양</a>
        </div>
        <div>
          <h1>FrontEnd</h1>
          <a href="https://github.com/six-standard">육기준</a>
        </div>
        <div>
          <h1>Android</h1>
          <a href="https://github.com/parkuiery">박의엘</a>
        </div>
        <div>
          <h1>iOS</h1>
          <a href="https://github.com/cyj513">조영준</a>
        </div>
        <div>
          <h1>Design</h1>
          <a href="https://github.com/nimeahgnak">강해민</a>
        </div>
      </Developers>
      <Logos>
        <a href="https://github.com/Team-SVAP"> 
          <Git src={`${imgPath.P}/Github.png`} alt="" />
        </a>
        <Logo src={`${imgPath.P}/LogoWhite.png`} alt="Logo" />
      </Logos>
    </Interactions>
    <Line />
    <Contacts>
      <h1>ⓒ 2023 SVAP</h1>
      <h1>연락처: 042-1234-5678</h1>
      <h1>주소: (34111) 대전광역시 유성구 가정북로 76(장동 23-9)</h1>
    </Contacts>
  </Wrapper>
}

// Box Components
const Wrapper = styled.div`
  gap: 2.188rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 18.75rem;
  padding: 0 10% 0 10%;
  box-sizing: border-box;
  background: var(--gray700);
  & * { color: var(--gray200); }
  & div { display: flex; }
  & a:hover { filter: invert(20%); }
`

const Interactions = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const Contacts = styled.div`
  width: 100%;
  flex-direction: column;
  align-self: flex-start;
  & h1 {
    font-weight: 400;
    font-size: 0.938rem;
    line-height: 1.563rem;
  }
`

const Developers = styled.div` // 개발자 깃허브 URL
  gap: 1.25rem;
  align-items: center;
  & div { // 각 항목들
    gap: 0.313rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    & h1 {
      font-weight: 600;
      font-size: 1.25rem;
    }
    & a { font-size: 1.063rem; }
  }
`

const Logos = styled.div`
  gap: 0.625rem;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  height: 0.125rem;
  background: var(--gray200);
`

const Git = styled.img`
  width: 2.813rem;
  height: 2.813rem;
`

const Logo = styled.img`
  width: 8.188rem;
  height: 3.313rem;
`