import * as _ from './Style';

export const Error = () => {
  return <_.Wrapper>
    <_.ErrorBox>
      <h1>404</h1>
      <_.Line />
      <h2>페이지를 찾을 수 없습니다</h2>
    </_.ErrorBox>
  </_.Wrapper>
}