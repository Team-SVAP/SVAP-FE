import { styled } from 'styled-components';

interface IButton {
  text: string;
  style?: object;
  disabled: boolean;
  action: () => void;
}

export const Button = ({ text, disabled, style, action }: IButton) => {
  return <Component disabled={!disabled} onClick={action} style={style}>
    {text}
  </Component>
}

const Component = styled.button<{disabled:boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10.25rem;
  transition: 0.2s all;
  border-radius: 1.25rem;
  padding: 10px 30px 10px 30px;
  cursor: ${({disabled}) => !disabled ? "pointer" : "not-allowed"};
  background: var(${({disabled}) => !disabled ? "--main700" : "--main500"});
  font-weight: 700;
  color: #ffffff;
  font-size: 1.25rem;
`