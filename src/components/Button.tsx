import { styled } from 'styled-components';

interface Props {
  width: string;
  height: string;
  text: string;
  style?: object
  clickAble: boolean;
  action: () => void;
}

export const Button = ({ width, height, text, clickAble, style, action }: Props) => {
  return <Wrapper width={width} height={height} clickAble={clickAble} onClick={action} style={style}>
    {text}
  </Wrapper>
}

const Wrapper = styled.div<{width:string, height:string, clickAble:boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  border-radius: 1.25rem;
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: ${props => props.clickAble ? "pointer" : "not-allowed"};
  background: var(${props => props.clickAble ? "--main700" : "--main500"});
  font-weight: 700;
  color: #ffffff;
  font-size: 1.25rem;
`