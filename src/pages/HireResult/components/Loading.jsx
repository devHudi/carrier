import styled from 'styled-components';
import { Flex, Margin } from 'carrier-ui';
import logo from 'assets/images/logo-image.png';

const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  font-size: 14px;
  color: #555555;
`;

const Logo = styled.img`
  width: 82px;
`;

const Loading = () => (
  <Wrapper justify="center" align="center" direction="column">
    <Logo src={logo} />
    <Margin size={50} />
    <Text>나에게 꼭 맞는 가이드 찾는중 ···</Text>
  </Wrapper>
);

export default Loading;
