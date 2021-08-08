import styled from 'styled-components';
import PropTypes from 'prop-types';
import Margin from 'carrier-ui/Margin';
import guide from '../assets/Guide.png';
import traveler from '../assets/Traveler.svg';

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

// &:hover {
//   width: 220px;
//   height: 158px;
//   text-align: center;
//   font: normal normal normal 24px/40px NanumSquare;
//   letter-spacing: 0px;
//   color: #fff;
//   opacity: 1;
//   background: rgba(0, 0, 0, 0.7) 0% 0% no-repeat padding-box;
//   opacity: 0.7;
// }

const ImageWrapper = styled.div`
  width: 97px;
  height: 97px;
  border-radius: 70%;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s;
`;
// border: 1px solid #888;

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

const UserType = ({ activated }) => (
  <>
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

      <SubWrapper>
        <GuideImage />
        <Margin size={10} />
        <Type>가이드</Type>
        <Margin size={4} />
        <Text>여행자를 구하고 있어요!</Text>
      </SubWrapper>
    </Wrapper>
  </>
);

UserType.propTypes = {
  activated: PropTypes.bool,
};

UserType.defaultProps = {
  activated: false,
};

export default UserType;
