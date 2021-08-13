import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import slider from '../assets/slider.jpeg';

const moveLeft = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-970px);
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Slider = styled.img`
  transform: translateX(0px);
  height: 270px;
  animation-name: ${(props) => props.animation && moveLeft};
  animation-duration: 4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const AnimationB = ({ animation }) => (
  <Wrapper>
    <Slider animation={animation} src={slider} />
  </Wrapper>
);

AnimationB.propTypes = {
  animation: PropTypes.bool,
};

AnimationB.defaultProps = {
  animation: false,
};

export default AnimationB;
