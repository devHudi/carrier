import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.input.attrs({ type: 'range' })`
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 2.5px;
  background-color: #d3d3d3;

  &::-webkit-slider-thumb {
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    z-index: 1;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }

  &::after {
    width: ${(props) => props.value}%;
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 2.5px;
    content: '';
  }
`;

const RangeSlider = ({ percentage, onChange }) => (
  <Wrapper
    type="range"
    min="1"
    max="100"
    value={percentage}
    onChange={onChange}
  />
);

RangeSlider.propTypes = {
  percentage: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

RangeSlider.defaultProps = {
  percentage: 0,
};

export default RangeSlider;
