import styled from 'styled-components';
import { RoundedButton } from 'carrier-ui';

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 0px;
`;

const ReviewButton = () => (
  <Container>
    <RoundedButton
      radius={45}
      color="blue"
      blue
      fontSize={15}
      style={{ margin: '20px' }}
    >
      후기 남기기
    </RoundedButton>
  </Container>
);

export default ReviewButton;
