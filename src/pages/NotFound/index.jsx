import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { RoundedButton, Margin, PageCenter } from 'carrier-ui';

import illustration from './assets/illustration.svg';

const Illustration = styled.img`
  width: 100%;
  max-width: 275px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.blue};
`;

const Subtitle = styled.div`
  text-align: center;
  font-size: 14px;
  color: #9b9b9b;
  line-height: 1.3;
`;

const NotFound = () => {
  const history = useHistory();

  return (
    <PageCenter>
      <Illustration src={illustration} />
      <Margin size={35} />

      <Title>페이지를 찾을 수 없어요.</Title>
      <Margin size={10} />

      <Subtitle>
        요청하신 결과를 찾을 수 없어요.
        <br />
        입력하신 URL이 올바른지 확인해주세요.
      </Subtitle>
      <Margin size={50} />

      <RoundedButton
        blue
        onClick={() => {
          history.push('/');
        }}
      >
        메인으로 돌아가기
      </RoundedButton>
    </PageCenter>
  );
};

export default NotFound;
