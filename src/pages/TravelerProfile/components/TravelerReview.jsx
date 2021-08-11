import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { Typography, Margin, Flex } from 'carrier-ui';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image from '../data/review.svg';

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

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

const ReviewWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-top: 1px solid #b4b4b4;
  border-bottom: 1px solid #b4b4b4;
  opacity: 1;
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

const TravelerReview = ({ reviews }) => {
  const InnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  console.log(reviews);
  return (
    <div>
      <DivWrapper>
        {false && (
          <Container>
            <Typography headline>내가 작성한 후기</Typography>
            <InnerWrapper>
              <ImageCircle />
              <Margin size={10} />
            </InnerWrapper>
          </Container>
        )}
        {true && (
          <Container>
            <Typography headline>내가 작성한 </Typography>
            <Margin size={22} />
            <Wrapper>
              {_.map(reviews, (review) => (
                <ReviewWrapper>
                  <Flex direction="column" justify="flex-start" width="100%">
                    <Margin row size={18} />
                    <Flex direction="column" justify="flex-start" width="100%">
                      <Flex
                        direction="row"
                        justify="space-between"
                        align="center"
                      >
                        <Typography body color="gray">
                          ★ 별점
                        </Typography>
                        <Typography body color="blue">
                          {review.employer_name}
                        </Typography>
                      </Flex>
                      <Margin size={1} />
                      <Flex direction="column" align="flex-start">
                        <Typography body>{review.comment}</Typography>
                        <Margin size={4} />
                      </Flex>
                    </Flex>
                  </Flex>
                </ReviewWrapper>
              ))}
            </Wrapper>
          </Container>
        )}
      </DivWrapper>
    </div>
  );
};

TravelerReview.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TravelerReview;
