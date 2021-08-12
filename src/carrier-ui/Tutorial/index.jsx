import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Template from './components/Template';

import AnimationA from './components/AnimationA';
import AnimationB from './components/AnimationB';
import AnimationC from './components/AnimationC';
import AnimationD from './components/AnimationD';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  background-color: ${(props) => props.theme.colors.white};
  z-index: 9999;
`;

const StyledSlider = styled(Slider)`
  &,
  .slick-track,
  .slick-slide,
  .slick-list,
  .slick-slide > div {
    height: 100%;
  }

  .slick-slide > div {
    cursor: pointer;
    margin: auto;
  }

  .slick-prev {
    color: #a1a1a1;
    width: 30px;
    height: 30px;
  }

  .slick-next {
    color: #a1a1a1;
    width: 30px;
    height: 30px;
  }

  .slick-dots {
    top: 50px;
    bottom: initial;
  }
`;

const Item = styled.div`
  height: 100%;
`;

const Tutorial = () => {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(0);

  const setDone = () => {
    localStorage.setItem('tutorial', 'true');
    setVisible(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    afterChange: (i) => setFocused(i),
  };

  useEffect(() => {
    if (localStorage.getItem('tutorial') === 'true') setVisible(false);
    else setVisible(true);
  }, []);

  return (
    <Wrapper visible={visible}>
      <StyledSlider {...settings}>
        <Item>
          <Template
            animation={<AnimationA animation={focused === 0} />}
            title={
              <>
                여행자님의 여행 정보를
                <br />
                알려주세요.
              </>
            }
            subtitle="여행 일정, 교통 수단부터 호불호 테마까지 CARRIER는 당신의 취향을 세심하게 고려합니다."
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationB animation={focused === 1} />}
            title={
              <>
                여행자님에게 딱 맞는 가이드를
                <br />
                추천해드릴게요!
              </>
            }
            subtitle="여행자님이 입력해주신 정보를 바탕으로 가장 여행자님과 잘맞는 가이드를 분석해드려요."
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationC animation={focused === 2} />}
            title={
              <>
                마음에 드는 가이드와
                <br />
                직접 소통하세요.
              </>
            }
            subtitle="직접 선택한 가이드에게 당신의 취향을 완벽하게 반영한 여행 계획을 받아보세요!"
          />
        </Item>
        <Item>
          <Template
            animation={<AnimationD animation={focused === 3} />}
            title={
              <>
                성공적인 여행을 도와준
                <br />
                가이드에게 후기를 남겨주세요.
              </>
            }
            subtitle="가이드를 찾는 다른 여행자들에게 즐거운 후기를 공유해주세요."
            last
            onDone={setDone}
          />
        </Item>
      </StyledSlider>
    </Wrapper>
  );
};

export default Tutorial;
