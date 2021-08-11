import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 12px;
  border: 2px solid
    ${(props) =>
      props.activated ? props.theme.colors.primary : props.theme.colors.white};
  border-radius: 8px;
  background-color: ${(props) =>
    props.activated ? props.theme.colors.white : 'rgba(255, 255, 255, 0.22)'};
  transition: background-color 0.3s, color 0.3s;
`;

const Line = styled.div`
  width: 45px;
  height: 1px;
  border-bottom: 1px dotted ${(props) => props.theme.colors.white};
  opacity: 0.4;
`;

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProgressBar = ({ size, current, onClick }) => (
  <BarWrapper>
    {_.map([...Array(size)], (v, idx) => {
      const step = idx + 1;
      return (
        <>
          <Circle activated={step === current} onClick={() => onClick(step)}>
            {step === 3 ? <p>PLUS</p> : step + 16}
          </Circle>
          {step < size && <Line />}
        </>
      );
    })}
  </BarWrapper>
);

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

ProgressBar.defaultProps = {
  onClick: () => {},
};

export default ProgressBar;
