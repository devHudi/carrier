import styled from 'styled-components';
import { Flex, Margin } from 'carrier-ui';

const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  font-size: 14px;
  color: #555555;
`;

const Logo = styled.img`
  width: 120px;
`;

const Loading = () => (
  <Wrapper justify="center" align="center" direction="column">
    <Logo src="http://placehold.it/300x300" />
    <Margin size={30} />
    <Text>나에게 꼭 맞는 가이드 찾는중 ···</Text>
  </Wrapper>
);

export default Loading;
