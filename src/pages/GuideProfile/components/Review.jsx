import styled from 'styled-components';
import { Typography, Margin, Flex } from 'carrier-ui';
import { RiStarFill } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewerPicture from '../data/reviewer.png';

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
  overflow: hidden;
  box-shadow: 0px 0px 20px -5px #ababab;
`;

const Blur = styled(Typography)`
  letter-spacing: 0px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}rem;
  opacity: 1;
`;

const SliderContainer = styled.div`
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 500px;
    margin: 0 auto;
  }
  .slick-slide div {
    cursor: pointer;
    margin: 0;
  }
  .slick-slide div .outline {
    padding: 10px;
    margin: 0 15px;
    margin-left: 0;
  }
`;

const ReviewWrapper = styled.div`
  background: 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  border: 1px solid #b4b4b4;
  border-radius: 22px;
  opacity: 1;
  height: 220px;
  margin: 0 10px;
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Review = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Wrapper>
        <Container>
          <Typography headline>여행자 후기</Typography>
          <Margin size={10} />
          <Blur body color="#707070" size={1}>
            <RiStarFill color="#FFDE0A" /> 평점 4.8점 (102개)
          </Blur>
          <Margin size={20} />
          <SliderContainer>
            <StyledSlider {...settings}>
              <div>
                <ReviewWrapper className="outline">
                  <Reviewer>
                    <Image src={ReviewerPicture} />
                    <Margin row size={10} />
                    <Flex direction="column">
                      <Typography body>조동현</Typography>
                      <Blur body color="#A5A5A5">
                        <RiStarFill /> 4.9 <BsDot /> 1개월 전
                      </Blur>
                    </Flex>
                  </Reviewer>
                  <Margin size={10} />
                  <Typography body>
                    여자친구랑 재밌게 놀다 왔습니다!! 서로 취향에 맞는 여행이라
                    더욱 즐거웠어요 :) 상담도 친절하게 해주시고 정말
                    감사했습니다!
                  </Typography>
                </ReviewWrapper>
              </div>
              <div>
                <ReviewWrapper className="outline">
                  <Reviewer>
                    <Image src={ReviewerPicture} />
                    <Margin row size={10} />
                    <Flex direction="column">
                      <Typography body>신지애</Typography>
                      <Blur body color="#A5A5A5">
                        <RiStarFill /> 4.9 <BsDot /> 1개월 전
                      </Blur>
                    </Flex>
                  </Reviewer>
                  <Margin size={10} />
                  <Typography body>
                    여자친구랑 재밌게 놀다 왔습니다!! 서로 취향에 맞는 여행이라
                    더욱 즐거웠어요 :) 상담도 친절하게 해주시고 정말
                    감사했습니다!
                  </Typography>
                </ReviewWrapper>
              </div>
              <div>
                <ReviewWrapper className="outline">
                  <Reviewer>
                    <Image src={ReviewerPicture} />
                    <Margin row size={10} />
                    <Flex direction="column">
                      <Typography body>이성인</Typography>
                      <Blur body color="#A5A5A5">
                        <RiStarFill /> 4.9 <BsDot /> 1개월 전
                      </Blur>
                    </Flex>
                  </Reviewer>
                  <Margin size={10} />
                  <Typography body>
                    여자친구랑 재밌게 놀다 왔습니다!! 서로 취향에 맞는 여행이라
                    더욱 즐거웠어요 :) 상담도 친절하게 해주시고 정말
                    감사했습니다!
                  </Typography>
                </ReviewWrapper>
              </div>
            </StyledSlider>
          </SliderContainer>
          <Margin size={30} />
        </Container>
      </Wrapper>
    </div>
  );
};

export default Review;
