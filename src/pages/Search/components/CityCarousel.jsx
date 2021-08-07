/* eslint-disable react/jsx-props-no-spreading */
// import styled from 'styled-components';
// import { Margin } from 'carrier-ui';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import City from './City';
import Busan from '../assets/Busan.jpg';
import Jeon from '../assets/Jeonju.jpg';
import Nam from '../assets/Namsan.jpg';
import Gang from '../assets/Gangneung.jpg';
import Ga from '../assets/Gapyeong.jpg';
import In from '../assets/Incheon.jpg';
import Jeju from '../assets/Jeju.jpg';
import Sam from '../assets/Samcheok.jpg';
import Sok from '../assets/Sokcho.jpg';
import Mac from '../assets/Macao.jpg';
import Syd from '../assets/Sydney.jpg';
import Pa from '../assets/Paris.jpg';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const CityCarouselA = () => (
  <>
    <div>
      <Slider {...settings}>
        <Link to="/hire" style={{ textDecoration: 'none' }}>
          <City name="부산광역시" img={Busan} />
        </Link>
        <City name="전주시" img={Jeon} />
        <City name="제주도" img={Jeju} />
        <City name="서울특별시" img={Nam} />
        <City name="강릉시" img={Gang} />
        <City name="인천광역시" img={In} />
        <City name="속초시" img={Sok} />
        <City name="삼척시" img={Sam} />
        <City name="가평시" img={Ga} />
      </Slider>
    </div>
  </>
);

const CityCarouselB = () => (
  <>
    <div>
      <Slider {...settings}>
        <City name="제주도" img={Jeju} />
        <City name="강릉시" img={Gang} />
        <City name="인천광역시" img={In} />
        <City name="속초시" img={Sok} />
        <City name="삼척시" img={Sam} />
      </Slider>
    </div>
  </>
);

const CityCarouselC = () => (
  <>
    <div>
      <Slider {...settings}>
        <City name="마카오" img={Mac} />
        <City name="서울특별시" img={Nam} />
        <City name="시드니" img={Syd} />
        <City name="부산광역시" img={Busan} />
        <City name="전주시" img={Jeon} />
        <City name="제주도" img={Jeju} />
        <City name="강릉시" img={Gang} />
        <City name="인천광역시" img={In} />
        <City name="속초시" img={Sok} />
        <City name="삼척시" img={Sam} />
        <City name="가평시" img={Ga} />
      </Slider>
    </div>
  </>
);

const CityCarouselD = () => (
  <>
    <div>
      <Slider {...settings}>
        <City name="제주도" img={Jeju} />
        <City name="파리" img={Pa} />
        <City name="강릉시" img={Gang} />
        <City name="인천광역시" img={In} />
        <City name="속초시" img={Sok} />
        <City name="삼척시" img={Sam} />
      </Slider>
    </div>
  </>
);
export { CityCarouselA, CityCarouselB, CityCarouselC, CityCarouselD };
