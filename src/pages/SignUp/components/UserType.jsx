/* eslint-disable no-param-reassign */
import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Margin } from 'carrier-ui';
import guide from '../assets/guide.svg';
import employer from '../assets/Traveler.svg';
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
  background: url(${guide}) no-repeat;
  background-position: bottom -5px right 50%;
  background-size: contain;
  opacity: 1;
  border-radius: 70%;
  border: 1px solid #888;
`;

const ImageWrapper = styled.div`
  width: 93px;
  height: 98px;
  border-radius: 70%;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s;
  padding: 10px 26px 0 0;
`;

const TypeG = styled.div`
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
    <TypeG>가이드</TypeG>
    <Margin size={4} />
    <Text>여행자를 구하고 있어요!</Text>
  </SubWrapper>
);

const UserType = ({ state }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [border, setBorder] = useState('#5061fb');
  const [textColor, setTextColor] = useState('#5061fb');

  // eslint-disable-next-line no-shadow
  const setStyle = (selected, unselected) => {
    if (state === 0) {
      setBorder(selected);
      setTextColor(selected);
      state = 1;
    } else {
      setBorder(unselected);
      setTextColor('black');
      state = 0;
    }
  };

  const InputWrapper = styled.button`
    background-color: white;
    width: 97px;
    height: 97px;
    border-radius: 70%;
    border: 1px solid ${border};
  `;

  const TypeT = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${textColor};
  `;

  return (
    <Wrapper>
      <SubWrapper>
        <InputWrapper>
          <ImageWrapper onClick={() => setStyle('#5061fb', '#888')}>
            <img src={employer} width="100%" height="100%" object-fit="cover" />
          </ImageWrapper>
        </InputWrapper>
        <Margin size={10} />
        <TypeT>여행자</TypeT>
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
  state: PropTypes.bool,
};

UserType.defaultProps = {
  state: 1,
};

export default UserType;
