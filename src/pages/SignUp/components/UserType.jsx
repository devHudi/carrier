import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Margin } from 'carrier-ui';
import guide from '../assets/Guide.png';
import traveler from '../assets/Traveler.svg';
import HoverText from './HoverText';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideImage = styled.div`
  top: 346px;
  left: 104px;
  width: 97px;
  height: 97px;
  background: url(${guide});
  background-size: cover;
  opacity: 1;
`;

const ImageWrapper = styled.div`
  width: 97px;
  height: 97px;
  border-radius: 70%;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s;
`;

const InputWrapper = styled.button`
  width: 97px;
  height: 97px;
  border-radius: 70%;
  border: 1px solid black;

  &:focus {
    overflow: hidden;
    display: inline-block;
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme.colors.primary};
    transition: 0.3s;
  }
`;

// border: none;

// border: ${(props) =>
//   props.activated
//     ? `1px solid ${props.theme.colors.blue}`
//     : '0px solid #fff'};

const Type = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const Text = styled.div`
  font-size: 12px;
  color: #9b9b9b;
`;

// eslint-disable-next-line react/prop-types
const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => (
  <SubWrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    <GuideImage />
    <Margin size={10} />
    <Type>가이드</Type>
    <Margin size={4} />
    <Text>여행자를 구하고 있어요!</Text>
  </SubWrapper>
);

const UserType = ({ activated }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Wrapper>
      <SubWrapper>
        <InputWrapper>
          <ImageWrapper activated={activated}>
            <img
              src={traveler}
              background="rgba(225, 225, 225, 0)"
              width="100%"
              height="100%"
              object-fit="cover"
            />
          </ImageWrapper>
        </InputWrapper>
        <Margin size={10} />
        <Type>여행자</Type>
        <Margin size={4} />
        <Text>가이드가 필요해요!</Text>
      </SubWrapper>

      <HoverableDiv
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering && <HoverText />}
    </Wrapper>
  );
};

UserType.propTypes = {
  activated: PropTypes.bool,
};

UserType.defaultProps = {
  activated: false,
};

export default UserType;
