import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Margin, Flex, RoundedButton } from 'carrier-ui';

import illustration from '../assets/no-guide.svg';

const Wrapper = styled(Flex)`
  width: 100%;
`;

const Image = styled.img`
  width: 115px;
`;

const Title = styled.div`
  font-size: 19px;
`;

const Subtitle = styled.div`
  font-size: 13px;
  color: #c1c1c1;
`;

const NoGuide = () => {
  const history = useHistory();
  return (
    <Wrapper justify="center" align="center" direction="column">
      <Image src={illustration} />
      <Margin size={23} />
      <Title>적합한 가이드를 찾지 못했어요.</Title>
      <Margin size={4} />
      <Subtitle>더 넓은 범위로 선택지를 골라볼까요?</Subtitle>
      <Margin size={75} />
      <RoundedButton
        width={250}
        filled
        blue
        onClick={() => history.push('/search')}
      >
        홈으로 돌아가기
      </RoundedButton>
    </Wrapper>
  );
};

export default NoGuide;
