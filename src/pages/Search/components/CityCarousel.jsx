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
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CityCarousel = ({ places }) => (
  <Slider {...settings}>
    {_.map(places, (place) => (
      <Wrapper>
        <City
          sido={place.sido}
          place={place.name}
          img={place.image}
          name={place.nameKr}
        />
      </Wrapper>
    ))}
  </Slider>
);

CityCarousel.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CityCarousel;
