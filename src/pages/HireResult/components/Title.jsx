import PropTypes from 'prop-types';
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
  top: ${(props) => props.top}px;
  padding: 0 35px;
  width: 100%;
  opacity: 0;
  animation-name: ${titleFadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transition: top 0.5s;
`;

const TitleText = styled.div`
  line-height: 1.2;
  font-size: 22pt;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const Title = ({ top }) => (
  <TitleWrapper top={top}>
    <TitleText>
      이번 여행을 책임질
      <br />
      BEST 가이드는?
    </TitleText>
  </TitleWrapper>
);

Title.propTypes = {
  top: PropTypes.number.isRequired,
};

export default Title;
