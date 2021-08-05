import styled from 'styled-components';
import { Typography, Margin, Flex } from 'carrier-ui';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoPerson } from 'react-icons/go';
import { RiHeartFill } from 'react-icons/ri';
import Picture1 from '../data/b_02.png';

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 700px;
    margin: 0 auto;
  }
  .slick-slide div {
    cursor: pointer;
    margin: 0 10px;
  }
`;

const Wrapper = styled.div`
  background: transparent url(${Picture1}) 0% 0% no-repeat padding-box;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 24px;
  opacity: 1;
`;

const GuideWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 330px;
  opacity: 0.8;
  padding-bottom: 10px;
`;

const RecommendedGuide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <StyledSlider {...settings}>
        <Wrapper>
          <GuideWrapper>
            <Flex justify="space-between" width="100%">
              <div style={{ margin: '0px' }}>
                <Typography headline color="white" style={{ margin: '0px' }}>
                  박상준
                </Typography>
                <Typography subhead color="white" style={{ margin: '0px' }}>
                  인천, 시흥
                </Typography>
              </div>
              <div>
                <Typography body color="white">
                  <GoPerson color="blue" /> 100+ 가이드
                </Typography>
                <Typography body color="white">
                  <RiHeartFill color="#FF77B2" /> 100 like
                </Typography>
              </div>
            </Flex>
            <Margin size={10} />
            <Typography body color="white">
              #역사가 살아있는 #자연에서 휴양
              <br />
              #문화재 탐방 #데이트 코스
            </Typography>
          </GuideWrapper>
        </Wrapper>
        <Wrapper>
          <GuideWrapper>
            <Flex justify="space-between" width="100%">
              <div style={{ margin: '0px' }}>
                <Typography headline color="white" style={{ margin: '0px' }}>
                  이준현
                </Typography>
                <Typography subhead color="white" style={{ margin: '0px' }}>
                  부산, 울산
                </Typography>
              </div>
              <div>
                <Typography body color="white">
                  <GoPerson color="blue" /> 100+ 가이드
                </Typography>
                <Typography body color="white">
                  <RiHeartFill color="#FF77B2" /> 100 like
                </Typography>
              </div>
            </Flex>
            <Margin size={10} />
            <Typography body color="white">
              #역사가 살아있는 #자연에서 휴양
              <br />
              #문화재 탐방 #데이트 코스
            </Typography>
          </GuideWrapper>
        </Wrapper>
        <Wrapper>
          <GuideWrapper>
            <Flex justify="space-between" width="100%">
              <div style={{ margin: '0px' }}>
                <Typography headline color="white" style={{ margin: '0px' }}>
                  소연수
                </Typography>
                <Typography subhead color="white" style={{ margin: '0px' }}>
                  성남, 서울
                </Typography>
              </div>
              <div>
                <Typography body color="white">
                  <GoPerson color="blue" /> 100+ 가이드
                </Typography>
                <Typography body color="white">
                  <RiHeartFill color="#FF77B2" /> 100 like
                </Typography>
              </div>
            </Flex>
            <Margin size={10} />
            <Typography body color="white">
              #역사가 살아있는 #자연에서 휴양
              <br />
              #문화재 탐방 #데이트 코스
            </Typography>
          </GuideWrapper>
        </Wrapper>
      </StyledSlider>
    </div>
  );
};

export default RecommendedGuide;
