/* eslint-disable react/jsx-props-no-spreading */
// import styled from 'styled-components';
// import { Margin } from 'carrier-ui';
import Slider from 'react-slick';
import placeData from 'assets/data/placeData';
import styled from 'styled-components';

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
  display: flex;
  flex-direction: row;
`;

function isA(element) {
  if (element.sido === 'seoulsi') {
    return true;
  }
  return false;
}
function isB(element) {
  if (element.sido === 'gyeonggido') {
    return true;
  }
  return false;
}
function isC(element) {
  if (element.sido === 'gangwondo') {
    return true;
  }
  return false;
}
function isD(element) {
  if (element.sido === 'busansi') {
    return true;
  }
  return false;
}
function isE(element) {
  if (element.sido === 'jejudo') {
    return true;
  }
  return false;
}
function isF(element) {
  if (element.sido === 'daegusi') {
    return true;
  }
  return false;
}
function isG(element) {
  if (element.sido === 'incheonsi') {
    return true;
  }
  return false;
}
function isH(element) {
  if (element.sido === 'gwangjusi') {
    return true;
  }
  return false;
}
function isI(element) {
  if (element.sido === 'daejeonsi') {
    return true;
  }
  return false;
}
function isJ(element) {
  if (element.sido === 'ulsansi') {
    return true;
  }
  return false;
}
function isK(element) {
  if (element.sido === 'sejongsi') {
    return true;
  }
  return false;
}
function isL(element) {
  if (element.sido === 'chungcheongbukdo') {
    return true;
  }
  return false;
}
function isM(element) {
  if (element.sido === 'chungcheongnamdo') {
    return true;
  }
  return false;
}
function isN(element) {
  if (element.sido === 'jeollabukdo') {
    return true;
  }
  return false;
}
function isO(element) {
  if (element.sido === 'jeollanamdo') {
    return true;
  }
  return false;
}
function isP(element) {
  if (element.sido === 'gyeongsangbukdo') {
    return true;
  }
  return false;
}
function isQ(element) {
  if (element.sido === 'gyeongsangnamdo') {
    return true;
  }
  return false;
}

const A = placeData.filter(isA);
const B = placeData.filter(isB);
const C = placeData.filter(isC);
const D = placeData.filter(isD);
const E = placeData.filter(isE);
const F = placeData.filter(isF);
const G = placeData.filter(isG);
const H = placeData.filter(isH);
const I = placeData.filter(isI);
const J = placeData.filter(isJ);
const K = placeData.filter(isK);
const L = placeData.filter(isL);
const M = placeData.filter(isM);
const N = placeData.filter(isN);
const O = placeData.filter(isO);
const P = placeData.filter(isP);
const Q = placeData.filter(isQ);

// 지역별(sido별)로 캐러셀 따로?
const CityCarouselA = () => (
  <>
    <div>
      <Slider {...settings}>
        {A.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);

const CityCarouselB = () => (
  <>
    <div>
      <Slider {...settings}>
        {B.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);
const CityCarouselC = () => (
  <>
    <div>
      <Slider {...settings}>
        {C.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);

const CityCarouselD = () => (
  <>
    <div>
      <Slider {...settings}>
        {D.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);
const CityCarouselE = () => (
  <>
    <div>
      <Slider {...settings}>
        {E.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);

const CityCarouselF = () => (
  <>
    <div>
      <Slider {...settings}>
        {F.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);
const CityCarouselG = () => (
  <>
    <div>
      <Slider {...settings}>
        {G.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);

const CityCarouselH = () => (
  <>
    <div>
      <Slider {...settings}>
        {H.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);
const CityCarouselI = () => (
  <>
    <div>
      <Slider {...settings}>
        {I.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);

const CityCarouselJ = () => (
  <>
    <div>
      <Slider {...settings}>
        {J.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);
const CityCarouselK = () => (
  <>
    <div>
      <Slider {...settings}>
        {K.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);

const CityCarouselL = () => (
  <>
    <div>
      <Slider {...settings}>
        {L.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);
const CityCarouselM = () => (
  <>
    <div>
      <Slider {...settings}>
        {M.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);

const CityCarouselN = () => (
  <>
    <div>
      <Slider {...settings}>
        {N.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);
const CityCarouselO = () => (
  <>
    <div>
      <Slider {...settings}>
        {O.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);

const CityCarouselP = () => (
  <>
    <div>
      <Slider {...settings}>
        {P.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);
const CityCarouselQ = () => (
  <>
    <div>
      <Slider {...settings}>
        {Q.map((spot) => (
          <Wrapper>
            <City
              sido={spot.sido}
              place={spot.name}
              img={spot.image}
              name={spot.nameKr}
            />
          </Wrapper>
        ))}
      </Slider>
    </div>
  </>
);

export {
  CityCarouselA,
  CityCarouselB,
  CityCarouselC,
  CityCarouselD,
  CityCarouselE,
  CityCarouselF,
  CityCarouselG,
  CityCarouselH,
  CityCarouselI,
  CityCarouselJ,
  CityCarouselK,
  CityCarouselL,
  CityCarouselM,
  CityCarouselN,
  CityCarouselO,
  CityCarouselP,
  CityCarouselQ,
};
