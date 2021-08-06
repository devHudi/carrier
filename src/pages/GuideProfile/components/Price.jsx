import styled from 'styled-components';
import { Typography, Margin, Flex } from 'carrier-ui';
import CoursePicture from '../data/courseGuide.svg';
import OnlinePicture from '../data/onlineGuide.svg';

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
`;

const PriceWrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  opacity: 1;
  filter: blur(px);
  border: 1px solid #b4b4b4;
  border-radius: 22px;
  opacity: 1;
`;

const PriceContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
`;

const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  background: transparent url(${(props) => props.src}) 0% 0% no-repeat
    padding-box;
  background-size: cover;
  border-radius: 112px;
  opacity: 1;
`;

const Blur = styled(Typography)`
  letter-spacing: 0px;
  color: #b2b2b2;
  opacity: 1;
`;

const SemiBlur = styled(Typography)`
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-align: right;
`;

const PriceFlex = styled(Flex)`
  align-self: flex-end;
`;

const Price = () => (
  <div>
    <Wrapper>
      <Container>
        <Typography headline>가격</Typography>
        <Margin size={10} />
        <PriceWrapper>
          <PriceContainer>
            <Flex justify="space-between" align="center" width="100%">
              <ImgContainer src={CoursePicture} />
            </Flex>
            <Flex direction="column">
              <Typography headline>여행 코스 계획</Typography>
              <Blur body>맞춤형 여행 계획 받아보기</Blur>
            </Flex>
            <PriceFlex align="flex-end">
              <Typography headline>\ 50,000</Typography>
              <Typography subhead> /건</Typography>
            </PriceFlex>
          </PriceContainer>
        </PriceWrapper>
        <Margin size={20} />
        <PriceWrapper>
          <PriceContainer>
            <Flex justify="space-between" align="center" width="100%">
              <ImgContainer src={OnlinePicture} />
            </Flex>
            <Flex direction="column">
              <Typography headline>온라인 가이드</Typography>
              <Blur body>실시간으로 가이드받기</Blur>
            </Flex>
            <PriceFlex align="flex-end">
              <Typography headline>\ 12,000</Typography>
              <Typography subhead> /시간</Typography>
            </PriceFlex>
          </PriceContainer>
        </PriceWrapper>
        <Margin size={10} />
        <SemiBlur subhead>자세한 사항은 가이드와 직접 상의하세요</SemiBlur>
        <Margin size={20} />
      </Container>
    </Wrapper>
  </div>
);

export default Price;
