import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from 'assets/images/arrow-right.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 5px 5px 28px rgba(0, 0, 0, 0.2),
    -5px -5px 28px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  margin-top: 30px;

  & > svg {
    width: 13px;
    height: 23px;
    margin-left: 230px;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
`;
const HorizonNextButton = ({ onClick }) => (
  <Container>
    <Wrapper onClick={onClick}>
      <Arrow float="right" />
    </Wrapper>
  </Container>
);

HorizonNextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HorizonNextButton;
