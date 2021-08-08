import styled from 'styled-components';
import Busan from '../assets/Busan.jpg';

const Wrapper = styled.div`
  margin: 12px 20px 0 0;
  width: 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Picture = styled.div`
  width: 92px;
  height: 92px;
  background: url(${(props) =>
    props.background ? `${props.background}` : `${Busan}`});
  background-size: cover;
  box-shadow: 3px 3px 8px #00000029;
  border-radius: 10px;
`;

const CityName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px;
  line-height: 1.2;
  font-size: 10pt;
  color: #0c0c0c;
  font-weight: 800;
`;

// eslint-disable-next-line react/prop-types
const City = ({ name, img }) => (
  <>
    <Wrapper>
      <Picture background={img} />
      <CityName>{name}</CityName>
    </Wrapper>
  </>
);

export default City;
