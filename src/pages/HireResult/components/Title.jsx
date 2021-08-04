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
  top: 143px;
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
        이번 여행을 책임질
        <br />
        BEST 가이드는?
      </TitleText>
    </TitleWrapper>
  </>
);

export default Title;
