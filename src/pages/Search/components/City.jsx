import styled from 'styled-components';
import img from '../image/Busan.jpg';

const Wrapper = styled.div`
  margin: 12px 20px 0 0;
  width: 92px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.div`
  width: 92px;
  height: 92px;
  background: url(${img});
  background-size: cover;
  box-shadow: 3px 3px 8px #00000029;
  border-radius: 10px;
`;
// backgroundImage: "url(" + ${img} + ")"
// backgroundImage: 'url(${img})'

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

const City = () => (
  <>
    <Wrapper>
      <Picture />
      <CityName>부산</CityName>
    </Wrapper>
  </>
);

export default City;
