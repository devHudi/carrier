import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { Typography, Margin } from 'carrier-ui';

import { getRecommendedGuides } from 'controller/hire';

import Form from './components/Form';
import Navigation from './components/Navigation';

const Container = styled.div`
  padding: 0 24px;
  bottom: 0;
  width: 100%;
  overflow: scroll;
`;

const TitleContainer = styled.div`
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const HireResultMore = () => {
  const history = useHistory();
  const params = useParams();
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const doWork = async () => {
      setGuides(await getRecommendedGuides(params.submitId));
    };

    doWork();
  }, []);

  return (
    <>
      <Navigation leftIcon="back" onLeftIconClick={() => history.goBack()} />

      <Margin size={90} />
      <TitleContainer>
        <Typography title>이번 여행의 추천 가이드</Typography>
        <Typography subhead style={{ fontWeight: 'bold' }}>
          추천순 <IoIosArrowDown />
        </Typography>
      </TitleContainer>
      <Margin size={25} />
      <Container>
        <Form history={history} guides={guides} />
      </Container>
    </>
  );
};

export default HireResultMore;
