import styled from 'styled-components';
import { Typography, Margin, Flex } from 'carrier-ui';
import { GoPerson } from 'react-icons/go';
import { RiHeartFill } from 'react-icons/ri';
import Picture from '../data/img1.png';

const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(px);
`;

const GuideWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  opacity: 1;
`;

const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  background: transparent url(${Picture}) 0% 0% no-repeat padding-box;
  background-size: cover;
  border-radius: 112px;
  opacity: 1;
`;

const City = styled(Typography)`
  font: normal normal bold 13px/27px NanumSquare;
  letter-spacing: 0px;
  color: #c2c2c2;
  opacity: 1;
`;

const SimilarGuide = () => (
  <div>
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>조동현</Typography>
              <Margin row size={10} />
              <City subhead>속초, 강원</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>신지애</Typography>
              <Margin row size={10} />
              <City subhead>강릉, 삼척</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>이성인</Typography>
              <Margin row size={10} />
              <City subhead>서울, 부천</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>조동현</Typography>
              <Margin row size={10} />
              <City subhead>속초, 강원</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>신지애</Typography>
              <Margin row size={10} />
              <City subhead>강릉, 삼척</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>이성인</Typography>
              <Margin row size={10} />
              <City subhead>서울, 부천</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>조동현</Typography>
              <Margin row size={10} />
              <City subhead>속초, 강원</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>신지애</Typography>
              <Margin row size={10} />
              <City subhead>강릉, 삼척</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>이성인</Typography>
              <Margin row size={10} />
              <City subhead>서울, 부천</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>조동현</Typography>
              <Margin row size={10} />
              <City subhead>속초, 강원</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>신지애</Typography>
              <Margin row size={10} />
              <City subhead>강릉, 삼척</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>이성인</Typography>
              <Margin row size={10} />
              <City subhead>서울, 부천</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>조동현</Typography>
              <Margin row size={10} />
              <City subhead>속초, 강원</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>신지애</Typography>
              <Margin row size={10} />
              <City subhead>강릉, 삼척</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>이성인</Typography>
              <Margin row size={10} />
              <City subhead>서울, 부천</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>조동현</Typography>
              <Margin row size={10} />
              <City subhead>속초, 강원</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>신지애</Typography>
              <Margin row size={10} />
              <City subhead>강릉, 삼척</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
    <Margin size={20} />
    <Wrapper>
      <GuideWrapper>
        <Flex justify="space-between" align="center" width="100%">
          <ImgContainer />
          <Flex direction="column">
            <Flex align="flex-end">
              <Typography headline>이성인</Typography>
              <Margin row size={10} />
              <City subhead>서울, 부천</City>
            </Flex>
            <Margin size={5} />
            <Typography body>#역사가 살아있는 #자연에서 휴양하기</Typography>
            <Margin size={5} />
            <Flex align="center">
              <Typography body>
                <GoPerson color="blue" /> 100+ 가이드
              </Typography>
              <Margin row size={10} />
              <Typography body>
                <RiHeartFill color="#FF77B2" /> 100 like
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </GuideWrapper>
    </Wrapper>
  </div>
);

export default SimilarGuide;
