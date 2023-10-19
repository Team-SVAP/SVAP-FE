import { styled } from 'styled-components';
import { IButton } from '../Types';

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
  border-radius: 1.25rem;
  padding: 10px 30px 10px 30px;
  cursor: ${({disabled}) => !disabled ? "pointer" : "not-allowed"};
  background: var(${({disabled}) => !disabled ? "--main700" : "--main500"});
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
`