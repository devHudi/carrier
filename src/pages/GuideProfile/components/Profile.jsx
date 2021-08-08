import styled from 'styled-components';
import { Typography, Flex, Margin } from 'carrier-ui';
import { GoPerson } from 'react-icons/go';
import { RiHeartFill, RiStarFill } from 'react-icons/ri';
import Picture from '../data/img1.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const BackgroundCircle = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 112px;
  opacity: 1;
  box-shadow: 0px -20px 20px -20px #ababab;
`;

const ImageCircle = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  z-index: 3;
  top: 15px;
  background: transparent url(${Picture}) 0% 0% no-repeat padding-box;
  background-size: cover;
  border-radius: 112px;
  opacity: 1;
`;

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  position: relative;
  top: 75px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-top: 75px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(0px);
  width: 100%;
  text-align: center;
  box-shadow: 0px 0px 20px -5px #ababab;
`;

const City = styled(Typography)`
  font: normal normal bold 13px/27px NanumSquare;
  letter-spacing: 0px;
  color: #c2c2c2;
  opacity: 1;
`;

const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Profile = () => (
  <div>
    <Wrapper>
      <BackgroundCircle />
      <ImageCircle />
      <Container>
        <Typography headline>이지은</Typography>
        <City subhead bold700>
          부산, 김해
        </City>
        <Margin size={20} />
        <StatisticsWrapper>
          <Flex direction="column" align="center">
            <GoPerson color="blue" />
            <Typography headline bold400>
              119명
            </Typography>
            <City subhead>가이드</City>
          </Flex>
          <Flex direction="column" align="center">
            <RiHeartFill color="#FF77B2" />
            <Typography headline bold400>
              516명
            </Typography>
            <City subhead>좋아요</City>
          </Flex>
          <Flex direction="column" align="center">
            <RiStarFill color="#FFDE0A" />
            <Typography headline bold400>
              4.8점
            </Typography>
            <City subhead>평점</City>
          </Flex>
        </StatisticsWrapper>
        <Margin size={20} />
      </Container>
    </Wrapper>
  </div>
);

export default Profile;
