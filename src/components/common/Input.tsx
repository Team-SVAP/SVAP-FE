import { styled } from 'styled-components';
import { IInput } from '../Types';

export const Input = ({ type, value, icon, width, height, id, placeholder, change }: IInput) => {
  return <Component htmlFor={id} width={width} height={height}>
    <InputItem type={type} id={id} placeholder={placeholder} onChange={change} value={value} />
    { icon && <img src={icon.icon} alt="" onClick={icon.action} /> }
  </Component>
}

// Box Components
const Component = styled.label<{width:string, height:string}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({width}) => width};
  height: ${({height}) => height};
  & > img { cursor: pointer }
`

// Atom Components
const InputItem = styled.input`
  width: 100%;
  height: 1.25rem;
`
