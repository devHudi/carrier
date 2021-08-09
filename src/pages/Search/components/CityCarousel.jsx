import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import City from './City';

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
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 1,
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

const Wrapper = styled.div`
  & .slick-list > div {
    margin-left: 0;
  }
`;

const CityCarousel = ({ places }) => (
  <Wrapper>
    <Slider {...settings}>
      {_.map(places, (place) => (
        <City
          sido={place.sido}
          place={place.name}
          img={place.image}
          name={place.nameKr}
        />
      ))}
    </Slider>
  </Wrapper>
);

CityCarousel.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CityCarousel;
