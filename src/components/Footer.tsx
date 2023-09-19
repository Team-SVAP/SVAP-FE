import { styled } from 'styled-components';
import Github from '../assets/PNG/Github.png';
import Logo from '../assets/PNG/LogoWhite.png';
import '../styles/color.css';

export const Footer = () => {
  return <Wrapper>
    <Interactions>
      <Developers>
        <div><h1>BackEnd</h1><a href="https://github.com/ilyoil2">강태양</a></div>
        <div><h1>FrontEnd</h1><a href="https://github.com/six-standard">육기준</a></div>
        <div><h1>Android</h1><a href="https://github.com/six-standard">Soon..</a></div>
        <div><h1>iOS</h1><a href="https://github.com/cyj513">조영준</a></div>
        <div><h1>Design</h1><a href="https://github.com/nimeahgnak">강해민</a></div>
      </Developers>
      <Logos>
        <a href="https://github.com/Team-SVAP"><img src={Github} alt="GitHub" /></a>
        <img src={Logo} alt="Logo" />
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

const Wrapper = styled.div`
  gap: 2.188rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 18.75rem;
  padding-left: 12.5rem;
  padding-right: 12.5rem;
  background: var(--gray700);
  & > div { display: flex; }
  & * { color: var(--gray200); }
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
  & > h1 {
    font-weight: 400;
    font-size: 0.938rem;
    line-height: 1.563rem;
  }
`

const Developers = styled.div`
  gap: 1.25rem;
  display: flex;
  align-items: center;
  & > div { // 각 항목들
    gap: 0.313rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > h1 { // 개발자 이름
      font-size: 1.25rem;
      font-weight: 600;
    }
    & > a { // 개발자 깃허브 이동 버튼
      transition: 0.2s all;
      text-decoration-line: none;
      &:hover { filter: invert(20%); }
    }
  }
`

const Logos = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  & > a {
    transition: 0.2s all;
    &:hover {
      filter: invert(20%);
    }
  }
`

const Line = styled.div`
  width: 100%;
  height: 0.125rem;
  background: var(--gray200);
`