import { useState, useMemo } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { Navigation, Container, Margin, SearchBar } from 'carrier-ui';
import sidoData from 'assets/data/sidoData';
import placeData from 'assets/data/placeData';

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

const Search = () => {
  const [search, setSearch] = useState('');

  const filteredPlaces = useMemo(
    () => _.filter(placeData, (place) => _.includes(place.nameKr, search)),
    [search],
  );

  const filteredSidos = useMemo(() => {
    const sidos = _.chain(filteredPlaces)
      .map((place) => place.sido)
      .uniq()
      .value();

    return _.filter(sidoData, (sido) => _.includes(sidos, sido.id));
  }, [filteredPlaces]);

  return (
    <>
      <Navigation />
      <Logo>CARRIER</Logo>
      <Container top={90} padding={28}>
        <SearchBar onChange={(e) => setSearch(e.target.value)} />
        <Margin size={32} />

        {_.map(filteredSidos, (sido) => (
          <>
            <Category>{sido.title}</Category>
            <CityCarousel
              places={_.filter(filteredPlaces, { sido: sido.id })}
            />
          </>
        ))}
      </Container>
    </>
  );
};

export default Search;
