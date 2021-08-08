import styled from 'styled-components';
import { Typography, Margin } from 'carrier-ui';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../data/interest.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const ImageCircle = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent url(${image}) 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InterestGuide = () => {
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
  const noneinterest = true;
  return (
    <div>
      <Wrapper>
        {noneinterest && (
          <Container>
            <Typography headline>관심 가이드 목록</Typography>
            <InnerWrapper>
              <ImageCircle />
              <Margin size={10} />
            </InnerWrapper>
          </Container>
        )}
      </Wrapper>
    </div>
  );
};

export default InterestGuide;
