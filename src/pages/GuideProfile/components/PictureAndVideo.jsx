import styled from 'styled-components';
import { Typography, Margin } from 'carrier-ui';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Picture1 from '../data/picture1.png';
import Picture2 from '../data/picture2.png';
import Picture3 from '../data/picture3.png';

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
  margin: 10px;
  border-radius: 18px;
  opacity: 1;
`;

const Image = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const PictureAndVideo = () => {
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
    <div>
      <Wrapper>
        <Container>
          <Typography headline>사진 및 영상</Typography>
          <Margin size={10} />
          <SliderContainer>
            <StyledSlider {...settings}>
              <ImgContainer>
                <Image src={Picture1} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture2} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture3} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture1} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture2} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture3} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture1} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture2} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture3} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture1} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture2} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture3} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture1} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture2} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture3} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture1} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture2} />
              </ImgContainer>
              <ImgContainer>
                <Image src={Picture3} />
              </ImgContainer>
            </StyledSlider>
          </SliderContainer>
        </Container>
      </Wrapper>
    </div>
  );
};

export default PictureAndVideo;
