import styled from 'styled-components';
import { Typography, Margin, Flex } from 'carrier-ui';
import image from '../data/guide.svg';

const Wrapper = styled.div`
  margin-bottom: 17px;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 26px;
  height: 330px;
`;

const GuideWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #b4b4b4;
  border-radius: 22px;
  opacity: 1;
  margin-bottom: 20px;
`;

const DivWrapper = styled.div`
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
const ImageCircle = styled.div`
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent url(${image}) 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 130px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 0 0 80px;
  height: 80px;
  background: black;
  background-size: cover;
  border-radius: 112px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const City = styled(Typography)`
  font: normal normal bold 18px/27px NanumSquare;
  letter-spacing: 0px;
  color: #c2c2c2;
  opacity: 1;
`;
const GuideMatching = () => {
  const noneinterest = true;

  return (
    <div>
      <DivWrapper>
        {!noneinterest && (
          <Container>
            <Typography headline>가이드 매칭 내역</Typography>
            <Margin size={22} />
            <InnerWrapper>
              <ImageCircle />
              <Margin size={10} />
            </InnerWrapper>
          </Container>
        )}
        {noneinterest && (
          <Container>
            <Typography headline>가이드 매칭 내역</Typography>
            <Margin size={22} />
            <Wrapper>
              <GuideWrapper>
                <Flex
                  direction="row"
                  justify="flex-start"
                  align="center"
                  width="100%"
                >
                  <ImgContainer />
                  <Margin row size={18} />
                  <Flex>
                    <Flex direction="column" align="flex-start">
                      <Typography headline>name 가이드 </Typography>
                      <Margin size={4} />
                      <City subhead>sido</City>
                    </Flex>
                    <Margin size={5} />
                  </Flex>
                </Flex>
              </GuideWrapper>
            </Wrapper>
          </Container>
        )}
      </DivWrapper>
    </div>
  );
};

export default GuideMatching;
