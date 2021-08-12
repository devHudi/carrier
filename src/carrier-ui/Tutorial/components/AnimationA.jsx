import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { FaUmbrellaBeach } from 'react-icons/fa';
import { FiHeart, FiCamera } from 'react-icons/fi';
import { GiSpotedFlower, GiParkBench } from 'react-icons/gi';
import { MdFace, MdChildCare } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';

import { OptionButton, Flex } from 'carrier-ui';

const animation1 = (x1, y1, x2, y2) => keyframes`
  0% {
    transform: translate(${x1}px, ${y1}px);
  }
  100% {
    transform: translate(${x2}px, ${y2}px);
  } 
`;

const Wrapper = styled.div`
  position: relative;
`;

const Animated = styled.div`
  position: absolute;
  transform: translate(${(props) => props.x1}px, ${(props) => props.y1}px);

  animation-name: ${(props) =>
    props.animation && props.keyframes(props.x1, props.y1, props.x2, props.y2)};
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const Icon = styled(Flex)`
  width: 55px;
  height: 38px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
`;

const AnimationA = ({ animation }) => (
  <Wrapper>
    <Animated
      x1={130}
      y1={-30}
      x2={140}
      y2={-40}
      animation={animation}
      keyframes={animation1}
    >
      <OptionButton shadow activated>
        자동차
      </OptionButton>
    </Animated>
    <Animated
      x1={115}
      y1={-65}
      x2={90}
      y2={-110}
      animation={animation}
      keyframes={animation1}
    >
      <OptionButton shadow activated>
        비행기
      </OptionButton>
    </Animated>
    <Animated
      x1={20}
      y1={-50}
      x2={-20}
      y2={-90}
      animation={animation}
      keyframes={animation1}
    >
      <OptionButton shadow activated border blue icon={<FiHeart />}>
        # 데이트_코스
      </OptionButton>
    </Animated>
    <Animated
      x1={120}
      y1={-55}
      x2={105}
      y2={-75}
      animation={animation}
      keyframes={animation1}
    >
      <OptionButton shadow activated border blue icon={<GiParkBench />}>
        # 테마파크
      </OptionButton>
    </Animated>
    <Animated
      x1={40}
      y1={-20}
      x2={40}
      y2={-10}
      animation={animation}
      keyframes={animation1}
    >
      <OptionButton shadow activated border blue icon={<FaUmbrellaBeach />}>
        # 바다가_들린다
      </OptionButton>
    </Animated>
    <Animated
      x1={180}
      y1={-60}
      x2={185}
      y2={-100}
      animation={animation}
      keyframes={animation1}
    >
      <OptionButton shadow activated border blue icon={<GiSpotedFlower />}>
        # 꽃이_만개한
      </OptionButton>
    </Animated>
    <Animated
      x1={150}
      y1={-80}
      x2={150}
      y2={-140}
      animation={animation}
      keyframes={animation1}
    >
      <OptionButton shadow activated border blue icon={<FiCamera />}>
        # 포토존
      </OptionButton>
    </Animated>
    <Animated
      x1={160}
      y1={-45}
      x2={220}
      y2={-60}
      animation={animation}
      keyframes={animation1}
    >
      <Icon justify="center" align="center">
        <AiOutlineCalendar />
      </Icon>
    </Animated>
    <Animated
      x1={60}
      y1={-40}
      x2={30}
      y2={-45}
      animation={animation}
      keyframes={animation1}
    >
      <OptionButton shadow activated>
        지하철
      </OptionButton>
    </Animated>
    <Animated
      x1={170}
      y1={-20}
      x2={190}
      y2={-15}
      animation={animation}
      keyframes={animation1}
    >
      <Icon justify="center" align="center">
        <MdFace />
      </Icon>
    </Animated>
    <Animated
      x1={80}
      y1={-75}
      x2={70}
      y2={-160}
      animation={animation}
      keyframes={animation1}
    >
      <Icon justify="center" align="center">
        <MdChildCare />
      </Icon>
    </Animated>
  </Wrapper>
);

AnimationA.propTypes = {
  animation: PropTypes.bool,
};

AnimationA.defaultProps = {
  animation: false,
};

export default AnimationA;
