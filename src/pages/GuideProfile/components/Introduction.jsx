import styled from 'styled-components';
import { Typography, Margin } from 'carrier-ui';

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
  padding: 30px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(px);
  width: 100%;
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
        <Margin size={20} />
      </Container>
    </Wrapper>
  </div>
);

export default Introduction;
