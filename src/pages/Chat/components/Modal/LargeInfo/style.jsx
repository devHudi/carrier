import styled from 'styled-components';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import PropTypes from 'prop-types';
import OptionButton from 'carrier-ui/OptionButton';

export const OptionCommon = styled(OptionButton)`
  color: ${(props) => props.theme.colors.white};
`;

export const Wrapper = styled.div`
  font-weight: lighter;
  display: flex;
  width: 100%;
  margin: 6rem 1rem 0px 1rem;
  justify-content: space-around;
  align-items: center;
  background-color: #444444;
  background: ${(props) => `url(${props.background}) repeat`};
  box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.65);
  flex-direction: column;
  border-radius: 17px;
  opacity: 0.65;
  color: ${(props) => props.theme.colors.white};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding-top: 17px;
  padding-bottom: 15px;
  font-size: 20px;
  & img {
    width: 6rem;
    margin-left: 1rem;
    margin-right: 1rem;
    opacity: 0.65;
  }
`;
export const Img = styled.img`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin-top: ${(props) => `${props.marginTop}px`};
  margin-bottom: 5px;
`;
export const BasicInfo = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-around;
  alien-items: center;
  text-align: center;
  & div {
    font-size: 11px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: ${(props) => {
      const test = props.onClickModal;
      if (test === true) {
        return '45';
      }
      return '0';
    }}px;
  }
`;
export const Option = styled.div`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const OptionTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
// export const OptionText = styled.div`
//   border: 1px solid ${(props) => props.theme.colors.white};
//   border-radius: 32px;
//   font-size: 13px;
//   padding: 8px 10px 8px 10px;
//   margin 0px 7px 7px 0px;
// `;
export const OptionText = styled(OptionButton)`
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 32px;
  font-size: 13px;
  padding: 8px 10px 8px 10px;
  margin 0px 7px 7px 0px;
`;
export const Slider = styled.div`
  display: flex;
  font-weight: lighter;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 34px;
  padding-bottom: 18px;
`;
export const Slide = ({ ontoggle, clickModal }) => (
  <Slider onClick={ontoggle}>
    {clickModal ? (
      <div>
        여행정보 접기 <MdKeyboardArrowUp />
      </div>
    ) : (
      <div>
        여행정보 더보기 <MdKeyboardArrowDown />
      </div>
    )}
  </Slider>
);
Slide.propTypes = {
  ontoggle: PropTypes.func.isRequired,
  clickModal: PropTypes.bool.isRequired,
};
