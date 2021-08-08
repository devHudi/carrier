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
  box-shadow: 0px 0px 20px -5px #ababab;
`;

const PriceWrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  opacity: 1;
  filter: blur(px);
  border: 1px solid #b4b4b4;
  border-radius: 22px;
  opacity: 1;
  width: 48%;
  height: 200px;
`;

const PriceContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  width: 100%;
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  background: transparent url(${(props) => props.src}) 0% 0% no-repeat
    padding-box;
  background-size: cover;
  border-radius: 112px;
  opacity: 1;
  margin-bottom: 10px;
`;

const Blur = styled(Typography)`
  letter-spacing: 0px;
  color: #b2b2b2;
  opacity: 1;
  font-size: 1vw;
`;

const SemiBlur = styled(Typography)`
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  text-align: right;
  font-size: 1vw;
`;

const Price = () => (
  <div>
    <Wrapper>
      <Container>
        <Typography headline>가격</Typography>
        <Margin size={10} />
        <Flex justify="space-between" align="center">
          <PriceWrapper>
            <PriceContainer>
              <ImgContainer src={CoursePicture} />
              <Typography subhead style={{ fontSize: '2vw' }}>
                여행 코스 계획
              </Typography>
              <Blur body>맞춤형 여행 계획 받아보기</Blur>
              <Flex justify="center" align="flex-end">
                <Typography subhead style={{ fontSize: '2vw' }}>
                  \ 50,000
                </Typography>
                <Typography body style={{ fontSize: '1vw' }}>
                  {' '}
                  /건
                </Typography>
              </Flex>
            </PriceContainer>
          </PriceWrapper>
          <PriceWrapper>
            <PriceContainer>
              <ImgContainer src={OnlinePicture} />

              <Typography subhead style={{ fontSize: '2vw' }}>
                온라인 가이드
              </Typography>
              <Blur body>실시간으로 가이드받기</Blur>

              <Flex justify="center" align="flex-end">
                <Typography subhead style={{ fontSize: '2vw' }}>
                  \ 12,000
                </Typography>
                <Typography body style={{ fontSize: '1vw' }}>
                  {' '}
                  /시간
                </Typography>
              </Flex>
            </PriceContainer>
          </PriceWrapper>
        </Flex>
        <Margin size={10} />
        <SemiBlur subhead>자세한 사항은 가이드와 직접 상의하세요</SemiBlur>
        <Margin size={20} />
      </Container>
    </Wrapper>
  </div>
);

export default Price;
