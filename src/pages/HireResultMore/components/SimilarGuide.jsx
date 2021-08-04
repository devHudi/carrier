import styled from 'styled-components';
import { Typography, Margin, Flex } from 'carrier-ui';
import { GoPerson } from 'react-icons/go';
import { RiHeartFill } from 'react-icons/ri';

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 24px;
  opacity: 1;
`;

const GuideWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100px;
  opacity: 0.8;
`;

const SimilarGuide = () => (
  <div>
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" width="100%">
          <div>
            <Typography headline>조동현</Typography>
            <Typography subhead>속초, 강원</Typography>
          </div>
          <div>
            <Typography body>
              <GoPerson color="blue" /> 100+ 가이드
            </Typography>
            <Typography body>
              <RiHeartFill color="#FF77B2" /> 100 like
            </Typography>
          </div>
        </Flex>
        <Margin size={10} />
        <Typography body>
          #역사가 살아있는 #자연에서 휴양하기
          <br />
          #문화재 탐방 #데이트 코스
        </Typography>
      </GuideWrapper>
    </Wrapper>
    <Margin size={10} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" width="100%">
          <div>
            <Typography headline>신지애</Typography>
            <Typography subhead>강릉, 삼척</Typography>
          </div>
          <div>
            <Typography body>
              <GoPerson color="blue" /> 100+ 가이드
            </Typography>
            <Typography body>
              <RiHeartFill color="#FF77B2" /> 100 like
            </Typography>
          </div>
        </Flex>
        <Margin size={10} />
        <Typography body>
          #역사가 살아있는 #자연에서 휴양하기
          <br />
          #문화재 탐방 #데이트 코스
        </Typography>
      </GuideWrapper>
    </Wrapper>
    <Margin size={10} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" width="100%">
          <div>
            <Typography headline>이성인</Typography>
            <Typography subhead>서울, 부천</Typography>
          </div>
          <div>
            <Typography body>
              <GoPerson color="blue" /> 100+ 가이드
            </Typography>
            <Typography body>
              <RiHeartFill color="#FF77B2" /> 100 like
            </Typography>
          </div>
        </Flex>
        <Margin size={10} />
        <Typography body>
          #역사가 살아있는 #자연에서 휴양하기
          <br />
          #문화재 탐방 #데이트 코스
        </Typography>
      </GuideWrapper>
    </Wrapper>
  </div>
);

export default SimilarGuide;
