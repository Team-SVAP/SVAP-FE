import { styled } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { Modal } from "../Atoms";

interface IModal {
  children: React.ReactNode
}

export const ModalProvider = ({ children }: IModal) => {
  const [content, setContent] = useRecoilState(Modal);

  return <>
    {
      content.open && 
      <Wrapper>
        <ModalBox>
          {content.data}
        </ModalBox>
      </Wrapper>
    }
    {children}
  </>
}

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 575px;
  min-height: 360px;
  height: auto;
  border-radius: 15px;
  border: 1px solid var(--gray400);
  box-shadow: 2px 0 4px var(--gray500);
  background: white;
  box-sizing: border-box;
  padding: 60px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`