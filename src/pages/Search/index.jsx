import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { Navigation, Container, Margin } from 'carrier-ui';
import sidoData from 'assets/data/sidoData';
import placeData from 'assets/data/placeData';

import SearchBar from './components/SearchBar';
import CityCarousel from './components/CityCarousel';

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

      {_.map(sidoData, (sido) => (
        <>
          <Category>{sido.title}</Category>
          <CityCarousel places={_.filter(placeData, { sido: sido.id })} />
        </>
      ))}
    </Container>
  </>
);

export default Search;
