import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import Slider from 'react-slick';
import { GoPerson } from 'react-icons/go';
import { RiHeartFill } from 'react-icons/ri';
import { Typography, Margin, Flex } from 'carrier-ui';

import placeData from 'assets/data/placeData';
import themeData from 'assets/data/themeData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
  margin-bottom: 50px;

  & > .slick-list {
    margin: 0 auto;
    padding: 0 20% 0 0 !important;
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

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 330px;
  background-image: url('${(props) => props.image}');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e2e3e3;
  border-radius: 24px;
  opacity: 1;
`;

const Dimmer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  border-radius: 24px;
`;

const GuideWrapper = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0.8;
  padding: 12px;
`;

const Theme = styled(Typography)`
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const RecommendedGuide = ({ guides }) => {
  const history = useHistory();

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {_.map(guides, (guide) => (
          <Card
            key={guide.uid}
            image={guide.profile_image}
            onClick={() => history.push(`/profile/${guide.uid}`)}
          >
            <Dimmer>
              <GuideWrapper>
                <Flex justify="space-between" width="100%">
                  <div style={{ margin: '0px' }}>
                    <Typography
                      headline
                      color="white"
                      style={{ margin: '0px' }}
                    >
                      {guide.name}
                    </Typography>
                    <Typography subhead color="white" style={{ margin: '0px' }}>
                      {_.find(placeData, { sido: guide.place.sido }).sidoKr}
                    </Typography>
                  </div>
                  <div>
                    <Typography body color="white">
                      <GoPerson color="blue" /> {guide.hired_count} 가이드
                    </Typography>
                    <Typography body color="white">
                      <RiHeartFill color="#FF77B2" /> {guide.liked_count} like
                    </Typography>
                  </div>
                </Flex>
                <Margin size={10} />
                <Theme body color="white" bold300>
                  {_.map(
                    guide.themes,
                    (theme) => `# ${_.find(themeData, { id: theme }).label} `,
                  )}
                </Theme>
              </GuideWrapper>
            </Dimmer>
          </Card>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

RecommendedGuide.propTypes = {
  guides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecommendedGuide;
