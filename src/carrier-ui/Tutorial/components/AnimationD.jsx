import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import emoji from '../assets/emoji.svg';
import stars from '../assets/stars.svg';

const tada = keyframes`
  0% {transform: scale(1);} 
  10%, 20% {transform: scale(0.9) rotate(-3deg);} 
  30%, 50%, 70%, 90% {transform: scale(1.1) rotate(3deg);} 
  40%, 60%, 80% {transform: scale(1.1) rotate(-3deg);} 
  100% {transform: scale(1) rotate(0);} 
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation-name: ${(props) => props.animation && tada};
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const Emoji = styled.img`
  width: 83px;
  height: 83px;
`;

const Stars = styled.img`
  width: 260px;
  height: 33px;
`;

const AnimationD = ({ animation }) => (
  <Wrapper animation={animation}>
    <Emoji src={emoji} />
    <Stars src={stars} />
  </Wrapper>
);

AnimationD.propTypes = {
  animation: PropTypes.bool,
};

AnimationD.defaultProps = {
  animation: false,
};

export default AnimationD;
