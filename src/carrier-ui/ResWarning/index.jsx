import styled from 'styled-components';
import { Dimmer, PageCenter, Margin } from 'carrier-ui';

import illustration from './assets/illustration.svg';

const Wrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;

const Illustration = styled.img`
  width: 100%;
  max-width: 210px;
`;

const Title = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;

  & > span {
    font-size: 26px;
  }
`;

const Subtitle = styled.div`
  width: 100%;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  line-height: 1.4;
`;

const ResWarning = () => (
  <Wrapper>
    <Dimmer>
      <PageCenter>
        <Illustration src={illustration} />
        <Margin size={40} />

        <Title>
          <span>이런!</span>
          <br />
          데스크톱 환경은 아직 지원하지 않아요.
        </Title>
        <Margin size={15} />

        <Subtitle>
          화면의 크기를 줄이거나, <br /> 모바일 환경으로 접속해주세요.
        </Subtitle>
      </PageCenter>
    </Dimmer>
  </Wrapper>
);

export default ResWarning;
