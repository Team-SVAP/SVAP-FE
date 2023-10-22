import { styled } from 'styled-components';
import { useState } from 'react';
import { imgPath } from "../utils/Paths";
import { IDropdown } from "./Types";

export const Dropdown = ({value, data, action}: IDropdown) => {
  const [click, setClick] = useState(false);
  
  const handleClick = (e: any) => {
    setClick(true);
    setTimeout(() => setClick(false), 100);
    action(e);
  }

  return <DropdownBox click={click}>
    <div id="box"><h1>{value[data]}</h1><img src={`${imgPath.S}/Left.svg`} alt="" id="arrow"/></div>
    <div id="hidden">
      {
        Object.entries(value).map(([key, value]) => <h1 id={key} onClick={handleClick}>{value as unknown as string}</h1>)
      }
    </div>
  </DropdownBox>
}

export const DropdownBox = styled.div<{click: boolean}>`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  height: 3.125rem;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 0 2.25rem 0 2.25rem;
  border: 0.125rem solid var(--gray300);
  & h1 {
    color: var(--gray700);
  }
  & > div#box{
    display: grid;
    place-items: center center;
    grid-template-columns: 99% 1%;
    width: inherit;
    height: 3.125rem;
    & img { place-self: center end; }
    & > h1 { place-self: center center; }
  }
  & > div#hidden {
    width: 100%;
    gap: 10px;
    display: none;
    align-items: center;
    flex-direction: column;
    height: auto;
    top: 40px;
    background: white;
    position: absolute;
    padding: 10px 0 10px 0;
    border-radius: 0 0 1rem 1rem;
    border: 0.125rem solid var(--main700);
    border-top: none;
    & h1 {
      width: 70%;
      background: white;
      text-align: center;
      border-radius: 10px;
      &:hover { background: rgba(0, 0, 0, 0.1); }
    }
  }
  &:hover {
    border-bottom: none;
    border-radius: 1rem 1rem 0 0;
    border: 0.125rem solid var(--main700);
    & img { transform: rotate(-90deg); }
    & > div#hidden { display: ${({click}) => !click && "flex"}; }
  }
`

// const DropdownBox = styled.div<{click: boolean}>`
//   width: 185.5px;
//   display: flex;
//   flex-direction: column;
//   background: var(--gray000);
//   padding: 10px;
//   border-radius: 5px;
//   background: #f8f8f8;
//   & h1 { 
//     font-size: 19px; 
//     font-weight: 500;
//     color: var(--gray700);
//     cursor: pointer;
//   }
//   & > div:nth-child(1) {
//     display: flex;
//     justify-content: space-between;
//   }
//   &:hover {
//     background: #f8f8f8;
//     & > div#hidden {
//       display: ${({clicked}) => !clicked && "flex"};
//     }
//     & img#arrow {
//       transform: rotate(-90deg);
//     }
//   }
// `

// const HiddenBox = styled.div`
//   width: inherit;
//   gap: 5px;
//   display: none;
//   background: #f8f8f8;
//   position: absolute;
//   margin-left: -10px;
//   margin-top: 29px;
//   flex-direction: column;
//   padding: 10px;
//   border-radius: 0 0 5px 5px;
// `