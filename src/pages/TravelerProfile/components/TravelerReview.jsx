import styled from 'styled-components';
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
  width: 225px;
  height: 225px;
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

const TravelerReview = () => {
  const nonereview = true;
  return (
    <div>
      <DivWrapper>
        {!nonereview && (
          <Container>
            <Typography headline>내가 작성한 후기</Typography>
            <InnerWrapper>
              <ImageCircle />
              <Margin size={10} />
            </InnerWrapper>
          </Container>
        )}
        {nonereview && (
          <Container>
            <Typography headline>내가 작성한 후기</Typography>
            <Margin size={22} />
            <Wrapper>
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
                        가이드에게
                      </Typography>
                    </Flex>
                    <Margin size={1} />
                    <Flex direction="column" align="flex-start">
                      <Typography body>
                        여기는 리뷰의 내용이 와야함~~~!
                      </Typography>
                      <Margin size={4} />
                    </Flex>
                  </Flex>
                </Flex>
              </ReviewWrapper>
            </Wrapper>
          </Container>
        )}
      </DivWrapper>
    </div>
  );
};

export default TravelerReview;
