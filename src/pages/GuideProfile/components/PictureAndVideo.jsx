import { PropTypes } from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import { Typography, Margin } from 'carrier-ui';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

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

const SliderContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    margin: 5px;
    padding: 0px;
  }
  .slick-slide div {
    cursor: pointer;
    margin: auto;
  }
  .slick-prev {
    color: #a1a1a1;
    width: 30px;
    height: 30px;
  }

  .slick-next {
    color: #a1a1a1;
    width: 30px;
    height: 30px;
  }
`;

const ImgContainer = styled.div`
  padding: 2px 4px;
  opacity: 1;
`;

const Image = styled.div`
  height: 108px;
  border-radius: 18px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const PictureAndVideo = ({ guide }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    prevArrow: <RiArrowLeftSLine />,
    nextArrow: <RiArrowRightSLine />,
  };

  return (
    <Wrapper>
      <Container>
        <Typography headline>사진 및 영상</Typography>
        <Margin size={10} />
        <SliderContainer>
          <StyledSlider {...settings}>
            {_.map(guide?.images || [], (image) => (
              <ImgContainer>
                <Image image={image} />
              </ImgContainer>
            ))}
          </StyledSlider>
        </SliderContainer>
      </Container>
    </Wrapper>
  );
};

PictureAndVideo.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default PictureAndVideo;
