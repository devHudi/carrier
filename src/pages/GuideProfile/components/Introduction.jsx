import styled from 'styled-components';
import { Typography, Margin } from 'carrier-ui';
import {
  RiTimeLine,
  RiGlobalLine,
  RiFlagLine,
  RiBankCard2Line,
} from 'react-icons/ri';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(px);
  width: 100%;
  box-shadow: 0px 0px 20px -5px #ababab;
`;

const Blur = styled(Typography)`
  font: normal normal normal 24px/25px NanumSquare;
  font-size: 0.875rem;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const Introduction = () => (
  <div>
    <Wrapper>
      <Container>
        <Typography headline>가이드 소개</Typography>
        <Margin size={10} />
        <Typography body>
          부산의 데이트 코스 전문가, 이지은입니다!
          <br />
          데이트 코스 짜느라 머리 많이 아프셨죠?
          <br />
          이제 식사부터 관광지까지 전부 맡겨주세요!
          <br />
          여행자분의 취향에 꼭 맞는 코스를 짜드립니다.
          <br />
          편하게 연락주세요!
        </Typography>
        <Margin size={30} />
        <Blur body>
          <IconContainer>
            <RiTimeLine />
          </IconContainer>
          오전 10시 ~ 오후 6시 연락 가능
        </Blur>
        <Blur body>
          <IconContainer>
            <RiGlobalLine />
          </IconContainer>
          한국어, 영어, 중국어, 일본어 가능
        </Blur>
        <Blur body>
          <IconContainer>
            <RiFlagLine />
          </IconContainer>
          여행 코스 계획 / 온라인 가이드 제공
        </Blur>
        <Blur body>
          <IconContainer>
            <RiBankCard2Line />
          </IconContainer>
          계좌이체 가능
        </Blur>
      </Container>
    </Wrapper>
  </div>
);

export default Introduction;
