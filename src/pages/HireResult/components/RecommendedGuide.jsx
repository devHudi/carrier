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

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 700px;
    margin: 0 auto;
  }
  .slick-slide div {
    cursor: pointer;
    margin: 0 10px;
  }
`;

const Wrapper = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 24px;
  opacity: 1;
`;

const GuideWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 330px;
  opacity: 0.8;
  padding-bottom: 10px;
`;

const RecommendedGuide = ({ guides }) => {
  const history = useHistory();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <StyledSlider {...settings}>
        {_.map(guides, (guide) => (
          <Wrapper
            key={guide.uid}
            image={guide.profile_image}
            onClick={() => history.push(`/profile/${guide.uid}`)}
          >
            <GuideWrapper>
              <Flex justify="space-between" width="100%">
                <div style={{ margin: '0px' }}>
                  <Typography headline color="white" style={{ margin: '0px' }}>
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
              <Typography body color="white">
                {_.map(
                  guide.themes,
                  (theme) =>
                    `# ${_.snakeCase(_.find(themeData, { id: theme }).label)}`,
                )}
              </Typography>
            </GuideWrapper>
          </Wrapper>
        ))}
      </StyledSlider>
    </div>
  );
};

RecommendedGuide.propTypes = {
  guides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecommendedGuide;
