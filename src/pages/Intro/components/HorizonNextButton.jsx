import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 56px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 5px 5px 28px rgba(0, 0, 0, 0.2),
    -5px -5px 28px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  margin-top: 30px;
  padding-right: 22px;

  & > svg {
    width: 400px;
    height: 30px;
    margin: 0 -14px 0 230px;
    color: ${(props) => props.theme.colors.black};
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
      <BsArrowRight />
    </Wrapper>
  </Container>
);

HorizonNextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HorizonNextButton;
