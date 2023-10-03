import { styled } from 'styled-components';

interface icon {
  icon: string;
  action: () => void;
}

interface Props {
  type: string;
  value: string;
  icon?: icon;
  width: string;
  height: string;
  id: string;
  placeholder: string;
  change: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, value, icon, width, height, id, placeholder, change }: Props) => {
  return <Wrapper htmlFor={id} width={width} height={height}>
    <_Input type={type} id={id} placeholder={placeholder} onChange={change} value={value} />
    { icon && <img src={icon.icon} alt="" onClick={icon.action} /> }
  </Wrapper>
}

const Wrapper = styled.label<{width:string, height:string}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  transition: 0.2s all;
  box-sizing: border-box;
  padding: 0 1.25rem 0 1.25rem;
  width: ${props => props.width};
  height: ${props => props.height};
  border: 0.125rem solid var(--gray300);
  &:focus-within { border: 0.125rem solid var(--main700 )}
`

const _Input = styled.input`
  width: 80%;
  height: 1.25rem;
  background: none;
  font-weight: 500;
  font-size: 1.063rem;
  &::placeholder { color: var(--gray300) }
`
