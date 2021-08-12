import styled from 'styled-components';
import PropTypes from 'prop-types';
import Route1Map from '../data/route1_map.svg';
import Route2Map from '../data/route2_map.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Container = styled.img`
  width: 100%;
  height: ${(props) => props.height}px;
  border-radius: 22px;
  object-fit: contain;
  opacity: 1;
  filter: drop-shadow(0px 0px 4px #ababab);
  align: center;
`;

const Map = ({ step }) => {
  let Picture;
  if (step === 1) {
    Picture = Route1Map;
  } else {
    Picture = Route2Map;
  }
  return (
    <div>
      <Wrapper>
        <Container src={Picture} height={230} />
      </Wrapper>
    </div>
  );
};

Map.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Map;
