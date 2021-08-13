import styled from 'styled-components';
import { RoundedButton } from 'carrier-ui';
import PropTypes from 'prop-types';

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 0px;
  border-radius: 15px;
`;

const ReviewButton = ({ onClick }) => (
  <Container>
    <RoundedButton
      radius={45}
      color="blue"
      blue
      fontSize={15}
      style={{ margin: '20px' }}
      onClick={onClick}
    >
      후기 남기기
    </RoundedButton>
  </Container>
);
ReviewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ReviewButton;
