import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Dimmer, Flex, Margin, Typography, RoundedButton } from 'carrier-ui';

const Line = styled.div`
  width: 60px;
  border-bottom: 2px solid ${(props) => props.theme.colors.white};
`;

const LoginGuide = () => {
  const history = useHistory();

  return (
    <Dimmer opacity={0.9}>
      <Flex justify="center" align="center" direction="column">
        <Line />
        <Margin size={25} />
        <Typography title color="white">
          아직 CARRIER의
          <br />
          회원이 아니에요!
        </Typography>
        <Margin size={130} />
        <RoundedButton filled blue onClick={() => history.push('/sign-up')}>
          회원가입하고 나만의 가이드 받아보기
        </RoundedButton>
        <Margin size={25} />
        <RoundedButton onClick={() => history.push('/sign-in')}>
          이미 CARRIER의 회원이에요!
        </RoundedButton>
      </Flex>
    </Dimmer>
  );
};

export default LoginGuide;
