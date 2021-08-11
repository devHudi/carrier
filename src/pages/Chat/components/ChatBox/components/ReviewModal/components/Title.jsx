import styled, { keyframes } from 'styled-components';

const titleFadeIn = keyframes`
100% {
  opacity: 1
}
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0;
  animation-name: ${titleFadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  padding: 20px;
`;

const TitleText = styled.div`
  font-size: 22px;
`;

const Title = () => (
  <TitleWrapper>
    <TitleText>
      <span style={{ fontWeight: 'bold' }}>이지은 가이드</span>님의
      <br />
      가이드는 어땠나요?
    </TitleText>
  </TitleWrapper>
);

export default Title;
