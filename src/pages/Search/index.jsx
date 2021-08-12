import { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';

import { Navigation, Container, Margin, SearchBar } from 'carrier-ui';
import sidoData from 'assets/data/sidoData';
import placeData from 'assets/data/placeData';

import CityCarousel from './components/CityCarousel';

const Logo = styled.div`
  font-size: 20pt;
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
  const history = useHistory();
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
      <Navigation
        onLeftIconClick={() => {
          history.push('/chat');
        }}
        onRightIconClick={() => {
          history.push('/profile');
        }}
      >
        <Logo>CARRIER</Logo>
      </Navigation>
      <Container top={90} padding={28}>
        <SearchBar
          onChange={(e) => setSearch(e.target.value)}
          placeHolder="어디로 떠나시나요?"
        />
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
