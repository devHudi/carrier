import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import chat from '../assets/chat.png';

const moveUp = keyframes`
  0% {
    transform: translateY(155px);
  }
  20% {
    transform: translateY(155px);
  }
  33% {
    transform: translateY(95px);
  }
  53% {
    transform: translateY(95px);
  }
  66% {
    transform: translateY(55px);
  }
  83% {
    transform: translateY(55px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Chat = styled.img`
  width: 100%;
  transform: translateY(155px);
  animation-name: ${(props) => props.animation && moveUp};
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const AnimationC = ({ animation }) => (
  <Wrapper>
    <Chat src={chat} animation={animation} />
  </Wrapper>
);

AnimationC.propTypes = {
  animation: PropTypes.bool,
};

AnimationC.defaultProps = {
  animation: false,
};

export default AnimationC;
