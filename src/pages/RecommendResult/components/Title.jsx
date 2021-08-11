import styled from 'styled-components';
import { Margin } from 'carrier-ui';
import { FaGraduationCap } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const TitleContainer = styled.div`
  font: normal normal bold 22px/27px NanumSquare;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const Title = () => (
  <Wrapper>
    <TitleContainer>여행자님의 인하대 여행 계획</TitleContainer>
    <Margin row size={8} />
    <FaGraduationCap size={30} />
  </Wrapper>
);

export default Title;
