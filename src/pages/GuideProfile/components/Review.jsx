import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import styled from 'styled-components';
import { RiStarFill } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import Slider from 'react-slick';

import 'moment/locale/ko';

import { Typography, Margin, Flex } from 'carrier-ui';

import ReviewerPicture from '../data/reviewer.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const SliderWrapper = styled.div`
  & > .slick-list {
    margin: 0 auto;
  }

  & .slick-slide {
    padding: 0 6px;
  }

  & > .slick-slide div {
    cursor: pointer;
  }

  & .slick-prev:before,
  .slick-next:before {
    color: #000000;
  }
`;

const CardWrapper = styled.div`
  padding: 0 2px;
`;

const Card = styled.div`
  padding: 10px;
  background: 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  border: 1px solid #b4b4b4;
  border-radius: 22px;
  opacity: 1;
  height: 220px;
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const NoReview = styled(Flex)`
  padding: 20px;
  color: #ababab;
`;

const Review = ({ reviews }) => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    infinite: false,
    arrows: false,
  };

  return (
    <div>
      <Wrapper>
        <Container>
          <Typography headline>여행자 후기</Typography>
          <Margin size={10} />
          <Blur body color="#707070" size={1}>
            <RiStarFill color="#FFDE0A" /> 평점{' '}
            {_.chain(reviews)
              .map((review) => review.score)
              .mean()
              .floor(2)
              .value() || '-'}{' '}
            점 ({reviews.length}개)
          </Blur>
          <Margin size={20} />

          <SliderWrapper>
            <Slider {...settings}>
              {_.map(reviews, (review) => (
                <CardWrapper>
                  <Card className="outline">
                    <Reviewer>
                      <Image src={ReviewerPicture} />
                      <Margin row size={10} />
                      <Flex direction="column">
                        <Typography body>{review.employer_name}</Typography>
                        <Blur body color="#A5A5A5">
                          <RiStarFill /> {review.score} <BsDot />{' '}
                          {moment(
                            review.created_at.seconds * 1000 +
                              review.created_at.nanoseconds / 1000000,
                          ).fromNow()}
                        </Blur>
                      </Flex>
                    </Reviewer>
                    <Margin size={10} />
                    <Typography body>{review.comment}</Typography>
                  </Card>
                </CardWrapper>
              ))}
            </Slider>
            <Margin size={20} />
          </SliderWrapper>
          {reviews.length <= 0 && (
            <NoReview justify="center">후기가 없습니다.</NoReview>
          )}
        </Container>
      </Wrapper>
    </div>
  );
};

Review.propTypes = {
  // guide: PropTypes.object.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Review;
