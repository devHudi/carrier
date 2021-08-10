import styled, { keyframes } from 'styled-components';

const titleFadeIn = keyframes`
100% {
  opacity: 1
}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 80px;
  padding: 0 35px;
  width: 100%;
  opacity: 0;
  animation-name: ${titleFadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const TitleText = styled.div`
  line-height: 1.2;
  font-size: 22pt;
  color: ${(props) => props.theme.colors.white};
`;

const Title = () => (
  <>
    <TitleWrapper>
      <TitleText>
        회원님을 위한,
        <br />
        Carrier의 가이드 추천
      </TitleText>
    </TitleWrapper>
  </>
);

export default Title;
