import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from 'assets/images/arrow-right.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 5px 5px 28px rgba(0, 0, 0, 0.2),
    -5px -5px 28px rgba(255, 255, 255, 0.2);
  cursor: pointer;

  & > svg {
    width: 13px;
    height: 26px;
  }
`;

const NextButton = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <Arrow />
  </Wrapper>
);

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextButton;
