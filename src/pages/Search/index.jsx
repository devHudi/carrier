import styled from 'styled-components';
import React from 'react';
import placeData from 'assets/data/placeData';
import { Navigation, Container, Margin } from 'carrier-ui';
import * as fa from 'react-icons/fa';
import { GiWaveCrest, GiPartyPopper } from 'react-icons/gi';
import SearchBar from './components/SearchBar';
import {
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
} from './components/CityCarousel';

// eslint-disable-next-line array-callback-return
placeData.map((info) => {
  console.log(info.sido);
});

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20pt;
  margin-top: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
`;

const Category = styled.div`
  font-size: 12pt;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  margin-top: 30px;
`;

const Search = () => (
  <>
    <Navigation />
    <Logo>CARRIER</Logo>
    <Container top={90} padding={28}>
      <SearchBar />
      <Margin size={32} />
      <Category>
        지금 가장 인기있는 곳&nbsp;
        <fa.FaHotjar />
      </Category>
      <CityCarouselA />
      <Category>
        여름에는 역시 바다!&nbsp;
        <GiWaveCrest />
      </Category>
      <CityCarouselB />
      <Category>
        매일 화려한 이 축제&nbsp;
        <GiPartyPopper />
      </Category>
      <CityCarouselC />
      <Category>
        인생샷 스팟들이 가득!&nbsp;
        <fa.FaCameraRetro />
      </Category>
      <CityCarouselD />
      <Category>세계 7대 자연경관 제주🔅</Category>
      <CityCarouselE />
      <Category>대구&nbsp;</Category>
      <CityCarouselF />
      <Category>인천&nbsp;</Category>
      <CityCarouselG />
      <Category>광주광역시&nbsp;</Category>
      <CityCarouselH />
      <Category>대전&nbsp;</Category>
      <CityCarouselI />
      <Category>울산&nbsp;</Category>
      <CityCarouselJ />
      <Category>세종&nbsp;</Category>
      <CityCarouselK />
      <Category>충청북도&nbsp;</Category>
      <CityCarouselL />
      <Category>충청남도&nbsp;</Category>
      <CityCarouselM />
      <Category>전라북도&nbsp;</Category>
      <CityCarouselN />
      <Category>전라남도&nbsp;</Category>
      <CityCarouselO />
      <Category>경상북도&nbsp;</Category>
      <CityCarouselP />
      <Category>경상남도&nbsp;</Category>
      <CityCarouselQ />
    </Container>
  </>
);

export default Search;
