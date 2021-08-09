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
  padding: 20px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(px);
  width: 100%;
  box-shadow: 0px 0px 20px -5px #ababab;
`;

const Blur = styled(Typography)`
  letter-spacing: 0px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}rem;
  opacity: 1;
`;

const FAQ = () => (
  <div>
    <Wrapper>
      <Container>
        <Typography headline>FAQ</Typography>
        <Margin size={20} />
        <Typography subhead>
          Q. 가이드님이 짜준 코스에 마음에 안드는 부분이 있으면 어떡하나요?
        </Typography>
        <Margin size={10} />
        <Blur body color="#ABABAB">
          A. 저는 여행 코스 계획 서비스에서 최대 2번 수정 피드백 기회를
          제공합니다! 코스 계획 전에 최대한 자세한 여행자님의 취향과 정보를
          알려주시면 더더욱 여행자님에게 꼭 맞는 코스를 짜드릴 수 있답니다.
          2번의 수정 기회 이후에 추가 수정을 원하시면 추가 금액이 발생합니다.
        </Blur>
        <Margin size={30} />
        <Typography subhead>
          Q. 가이드님이 짜준 코스에 마음에 안드는 부분이 있으면 어떡하나요?
        </Typography>
        <Margin size={10} />
        <Blur body color="#ABABAB">
          A. 저는 여행 코스 계획 서비스에서 최대 2번 수정 피드백 기회를
          제공합니다! 코스 계획 전에 최대한 자세한 여행자님의 취향과 정보를
          알려주시면 더더욱 여행자님에게 꼭 맞는 코스를 짜드릴 수 있답니다.
          2번의 수정 기회 이후에 추가 수정을 원하시면 추가 금액이 발생합니다.
        </Blur>
        <Margin size={30} />
      </Container>
    </Wrapper>
  </div>
);

export default FAQ;
