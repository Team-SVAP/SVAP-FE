import { styled, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const SlideBox = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%;
`

export const CountBox = styled.div`
  gap: 5px;
  display: flex;
  align-self: flex-end;
  position: absolute;
  margin-bottom: 10px;
`

export const Count = styled.div`
  width: 12px;
  height: 12px;
  background: var(--gray500);
  border-radius: 50%;
  &#selected { background: var(--gray700); }
`

export const SlideItem = styled.img<{$fade: boolean | undefined; key: React.Key}>`
  width: 80%;
  height: auto;
  cursor: pointer;
  animation: ${({$fade}) => $fade !== undefined && ($fade ? fadeOut : fadeIn)} 0.5s;
`

export const Links = styled.div`
  gap: 1.25rem;
  display: flex;
  justify-content: space-between;
  width: 45%;
  min-width: 36.625rem;
`

export const Posts = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
  width: 45%;
  min-width: 36.625rem;
`

export const LinkButton = styled.button`
  gap: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 280px;
  width: 25.625rem;
  height: 13.125rem;
  background: var(--gray000);
  border-radius: 1.25rem 3.75rem;
  border: 0.063rem solid var(--gray200);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  & > h1 { // 텍스트
    font-size: 2rem;
    font-weight: 600;
    color: var(--gray700);
  }
  &:hover { background: var(--gray100); }
`

export const PostsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h1 { // 인기 청원
    font-weight: 600;
    font-size: 1.75rem;
    color: var(--gray600);
  }
  & > a { // 더보기
    cursor: pointer;
    font-weight: 600;
    font-size: 1.325rem;
    color: var(--gray600);
    &:hover { color: var(--gray500); }
  }
`

export const PostsData = styled.div`
  gap: 0.625rem;
  display: flex;
  flex-direction: column;
  & > h1 { // 제목
    font-weight: 700;
    font-size: 2.25rem;
  }
  & > h2 { // 글
    user-select: text;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--gray700);
  }
  & > a { // 전체보기 버튼
    gap: 0.625rem;
    display: flex;
    align-items: center;
    width: 7.5rem;
    cursor: pointer;
    & > h1 {
      font-weight: 600;
      font-size: 1.5rem;
      color: var(--gray700);
    }
    &:hover { gap: 1.25rem; }
  }
`

export const Watch = styled.img`
  width: 1.75rem;
  height: 1.563rem;
`

export const Write = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`