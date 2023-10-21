import { styled } from 'styled-components';
import { imgPath } from "../utils/Paths";
import { IDropdown } from "./Types";

export const TypeDropdown = ({clicked, selected, action}: IDropdown) => {
  return <DropdownBox clicked={clicked}>
    <div><h1>{selected}</h1><img src={`${imgPath.S}/Left.svg`} alt="" id="arrow"/></div>
    <HiddenBox id="hidden">
      <h1 onClick={action} id="recent">최신순으로 보기</h1>
      <h1 onClick={action} id="vote">투표순으로 보기</h1>
      <h1 onClick={action} id="access">승인된 청원만 보기</h1>
      <h1 onClick={action} id="wait">검토중인 청원만 보기</h1>
    </HiddenBox>
  </DropdownBox>
}

const DropdownBox = styled.div<{clicked: boolean}>`
  width: 185.5px;
  display: flex;
  flex-direction: column;
  background: var(--gray000);
  padding: 10px;
  border-radius: 5px;
  background: #f8f8f8;
  & h1 { 
    font-size: 19px; 
    font-weight: 500;
    color: var(--gray700);
    cursor: pointer;
  }
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    background: #f8f8f8;
    & > div#hidden {
      display: ${({clicked}) => !clicked && "flex"};
    }
    & img#arrow {
      transform: rotate(-90deg);
    }
  }
`

const HiddenBox = styled.div`
  width: inherit;
  gap: 5px;
  display: none;
  background: #f8f8f8;
  position: absolute;
  margin-left: -10px;
  margin-top: 29px;
  flex-direction: column;
  padding: 10px;
  border-radius: 0 0 5px 5px;
`