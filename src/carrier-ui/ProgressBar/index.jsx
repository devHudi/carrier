import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: ${(props) =>
    props.activated ? props.theme.colors.white : 'rgba(255, 255, 255, 0.22)'};
  color: ${(props) =>
    props.activated ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.6)'};
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
            {step}
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
