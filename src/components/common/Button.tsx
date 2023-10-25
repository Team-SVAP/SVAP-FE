import { styled } from 'styled-components';
import { IButton } from '../Types';

export const Button = ({ text, disabled, style, action }: IButton) => {
  return <Component disabled={disabled !== undefined ? !disabled : false} onClick={action} style={style}>
    {text}
  </Component>
}

// Box Components
const Component = styled.button<{disabled:boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 10.25rem;
  border-radius: 1.25rem;
  padding: 0.625rem 1.875rem 0.625rem 1.875rem;
  cursor: ${({disabled}) => !disabled ? "pointer" : "not-allowed"};
  background: var(${({disabled}) => !disabled ? "--main700" : "--main500"});
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
`