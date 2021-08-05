import { PropTypes } from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import { Typography, Margin, Flex } from 'carrier-ui';

import { GoPerson } from 'react-icons/go';
import { RiHeartFill } from 'react-icons/ri';
import Picture from '../data/img1.png';

import placeData from 'assets/data/placeData';
import themeData from 'assets/data/themeData';

import Picture from '../data/img1.png';

const Wrapper = styled.div`
  margin-bottom: 17px;
  padding: 15px;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  border-radius: 26px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const GuideWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > ${Flex} > ${Flex} {
    flex-grow: 1;
    width: 0px;
    padding-left: 17px;
  }
`;

const ImgContainer = styled.div`
  flex: 0 0 80px;
  height: 80px;
  background: transparent url(${Picture}) 0% 0% no-repeat padding-box;
  background-size: cover;
  border-radius: 112px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const City = styled(Typography)`
  font: normal normal bold 13px/27px NanumSquare;
  letter-spacing: 0px;
  color: #c2c2c2;
  opacity: 1;
`;

const Theme = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SimilarGuide = ({ guides }) => (
  <>
    {_.map(guides, (guide) => (
      <Wrapper>
        <GuideWrapper>
          <Flex justify="space-between" align="center" width="100%">
            <ImgContainer />
            <Flex direction="column">
              <Flex align="flex-end">
                <Typography headline>{guide.name}</Typography>
                <Margin row size={10} />
                <City subhead>
                  {_.find(placeData, { sido: guide.place.sido }).sidoKr}
                </City>
              </Flex>
              <Margin size={5} />
              <Theme body>
                {_.map(
                  guide.themes,
                  (theme) =>
                    `# ${_.snakeCase(_.find(themeData, { id: theme }).label)}`,
                )}
              </Theme>
              <Margin size={5} />
              <Flex align="center">
                <Typography body>
                  <GoPerson color="blue" /> {guide.hired_count} 가이드
                </Typography>
                <Margin row size={10} />
                <Typography body>
                  <RiHeartFill color="#FF77B2" /> {guide.liked_count} like
                </Typography>
              </Flex>
            </Flex>
          </Flex>
        </GuideWrapper>
      </Wrapper>
    ))}
  </>
);

SimilarGuide.propTypes = {
  guides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SimilarGuide;
