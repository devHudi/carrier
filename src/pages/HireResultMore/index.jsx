import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Margin, Navigation } from 'carrier-ui';

import { getRecommendedGuides } from 'controller/hire';

import Form from './components/Form';

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

const Title = styled.div`
  font-size: 20px;
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
      <Navigation
        leftIcon="back"
        rightIcon={null}
        position="relative"
        iconColor="#000000"
        onLeftIconClick={() => history.goBack()}
      />

      <TitleContainer>
        <Title>이번 여행의 추천 가이드</Title>
      </TitleContainer>
      <Margin size={25} />
      <Container>
        <Form history={history} guides={guides} />
      </Container>
    </>
  );
};

export default HireResultMore;
