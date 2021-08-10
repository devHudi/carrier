import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import { Typography, Margin, Flex } from 'carrier-ui';

import course from 'assets/svgs/course.svg';
import companion from 'assets/svgs/companion.svg';
import online from 'assets/svgs/online.svg';

const guideTypeData = [
  {
    id: 'planner',
    svg: course,
    title: '여행 코스 계획',
    subtitle: '맞춤형 여행 계획 찾아보기',
    unit: '건',
  },
  {
    id: 'online',
    svg: online,
    title: '온라인 가이드',
    subtitle: '실시간으로 가이드받기',
    unit: '1H',
  },
  {
    id: 'companion',
    svg: companion,
    title: '동행 가이드',
    subtitle: '함께 다니며 가이드받기',
    unit: '1H',
  },
];

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 26px;
  box-shadow: 0px 0px 20px -5px #ababab;
`;

const CardWrapper = styled(Flex)`
  gap: 10px;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #b4b4b4;
  border-radius: 22px;
  flex-grow: 1;
  height: 150px;
`;

const PriceContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  width: 100%;
  line-height: 1.5;
`;

const IllustrationWrapper = styled(Flex)`
  margin-bottom: 8px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #e1e1e1;
  background-image: ${(props) => props.image};
  background-size: 80%;
  background-position: center;
`;

const Illustration = styled.img`
  width: 75%;
`;

const Title = styled.div`
  font-size: 12px;
`;

const Subtitle = styled.div`
  font-size: 9px;
  color: #b2b2b2;
`;

const PriceNumber = styled.div`
  font-size: 15px;
`;

const PriceUnit = styled.div`
  font-size: 9px;
`;

const Label = styled.div`
  font-size: 12px;
  text-align: right;
  color: #707070;
`;

const Price = ({ guide }) => (
  <Container>
    <Typography headline>가격</Typography>
    <Margin size={10} />
    <CardWrapper justify="space-between" align="center">
      {_.map(Object.keys(guide?.prices || {}), (guideType) => (
        <PriceWrapper>
          <PriceContainer>
            <IllustrationWrapper justify="center" align="center">
              <Illustration
                src={_.find(guideTypeData, { id: guideType }).svg}
              />
            </IllustrationWrapper>
            <Title>{_.find(guideTypeData, { id: guideType }).title}</Title>
            <Subtitle>
              {_.find(guideTypeData, { id: guideType }).subtitle}
            </Subtitle>
            <Flex justify="center" align="flex-end">
              <PriceNumber>
                ₩ {guide?.prices[guideType].toLocaleString()}
              </PriceNumber>
              <PriceUnit>
                {' '}
                / {_.find(guideTypeData, { id: guideType }).unit}
              </PriceUnit>
            </Flex>
          </PriceContainer>
        </PriceWrapper>
      ))}
    </CardWrapper>
    <Margin size={10} />
    <Label>자세한 사항은 가이드와 직접 상의하세요</Label>
  </Container>
);

Price.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default Price;
