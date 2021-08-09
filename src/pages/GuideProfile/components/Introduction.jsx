import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { Typography, Margin } from 'carrier-ui';
import {
  RiTimeLine,
  RiGlobalLine,
  RiFlagLine,
  RiBankCard2Line,
} from 'react-icons/ri';

import languageData from 'assets/data/languageData';

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

const Blur = styled(Typography)`
  font: normal normal normal 24px/25px NanumSquare;
  font-size: 0.875rem;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
`;

const Introduction = ({ guide }) => (
  <div>
    <Wrapper>
      <Container>
        <Typography headline>가이드 소개</Typography>
        <Margin size={10} />
        <Typography body>{guide.introduction}</Typography>
        <Margin size={30} />
        <Blur body>
          <IconContainer>
            <RiTimeLine />
          </IconContainer>
          {guide.available_time.start}시 ~ {guide.available_time.end}시 연락
          가능
        </Blur>
        <Blur body>
          <IconContainer>
            <RiGlobalLine />
          </IconContainer>
          {_.map(
            guide.languages,
            (language) =>
              `# ${_.snakeCase(
                _.find(languageData, { id: language }).languageKr,
              )}`,
          )}
        </Blur>
        <Blur body>
          <IconContainer>
            <RiFlagLine />
          </IconContainer>
          여행 코스 계획 / 온라인 가이드 제공
        </Blur>
        <Blur body>
          <IconContainer>
            <RiBankCard2Line />
          </IconContainer>
          계좌이체 가능
        </Blur>
      </Container>
    </Wrapper>
  </div>
);

Introduction.propTypes = {
  guide: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Introduction;
