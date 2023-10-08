import { styled } from 'styled-components';
import { IInput, ITextArea } from './Types';

export const Input = ({ type, value, icon, width, height, id, placeholder, change }: IInput) => {
  return <Component htmlFor={id} width={width} height={height}>
    <_Input type={type} id={id} placeholder={placeholder} onChange={change} value={value} />
    { icon && <img src={icon.icon} alt="" onClick={icon.action} /> }
  </Component>
}

export const TextArea = ({ value, width, height, id, placeholder, change }: ITextArea) => {
  return <_Textarea value={value} width={width} height={height} id={id} placeholder={placeholder} onChange={change} />
}

const Component = styled.label<{width:string, height:string}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({width}) => width};
  height: ${({height}) => height};
`

const _Input = styled.input`
  width: 100%;
  height: 1.25rem;
`

const _Textarea = styled.textarea<{width: string, height: string}>`
  width: ${({width}) => width};
  height: ${({height}) => height};
`
