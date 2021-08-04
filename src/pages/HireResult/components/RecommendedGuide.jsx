import styled from 'styled-components';
import { Typography, Margin, Flex } from 'carrier-ui';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoPerson } from 'react-icons/go';
import { RiHeartFill } from 'react-icons/ri';

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 300px;
    margin: 0 auto;
  }
  .slick-slide div {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  padding: 15px;
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
`;

const RecommendedGuide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <StyledSlider {...settings}>
        <Wrapper>
          <GuideWrapper>
            <Flex justify="space-between" width="100%">
              <div>
                <Typography headline>박상준</Typography>
                <Typography subhead>인천, 시흥</Typography>
              </div>
              <div>
                <Typography body>
                  <GoPerson color="blue" /> 100+ 가이드
                </Typography>
                <Typography body>
                  <RiHeartFill color="#FF77B2" /> 100 like
                </Typography>
              </div>
            </Flex>
            <Margin size={10} />
            <Typography body>
              #역사가 살아있는 #자연에서 휴양하기
              <br />
              #문화재 탐방 #데이트 코스
            </Typography>
          </GuideWrapper>
        </Wrapper>
        <Wrapper>
          <GuideWrapper>
            <Flex justify="space-between" width="100%">
              <div>
                <Typography headline>이준현</Typography>
                <Typography subhead>부산, 울산</Typography>
              </div>
              <div>
                <Typography body>
                  <GoPerson color="blue" /> 100+ 가이드
                </Typography>
                <Typography body>
                  <RiHeartFill color="#FF77B2" /> 100 like
                </Typography>
              </div>
            </Flex>
            <Margin size={10} />
            <Typography body>
              #역사가 살아있는 #자연에서 휴양하기
              <br />
              #문화재 탐방 #데이트 코스
            </Typography>
          </GuideWrapper>
        </Wrapper>
        <Wrapper>
          <GuideWrapper>
            <Flex justify="space-between" width="100%">
              <div>
                <Typography headline>소연수</Typography>
                <Typography subhead>성남, 서울</Typography>
              </div>
              <div>
                <Typography body>
                  <GoPerson color="blue" /> 100+ 가이드
                </Typography>
                <Typography body>
                  <RiHeartFill color="#FF77B2" /> 100 like
                </Typography>
              </div>
            </Flex>
            <Margin size={10} />
            <Typography body>
              #역사가 살아있는 #자연에서 휴양하기
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
