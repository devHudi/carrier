import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import _ from 'lodash';
import styled from 'styled-components';

import { Navigation, Container } from 'carrier-ui';
import { getRecommendedGuides } from 'controller/hire';

import Loading from './components/Loading';
import Form from './components/Form';
import Title from './components/Title';

const FlexContainer = styled(Container)`
  display: flex;
`;

const HireResult = () => {
  const history = useHistory();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const doWork = async () => {
      setGuides(_.slice(await getRecommendedGuides(params.submitId), 0, 5));

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    doWork();
  }, []);

  return (
    <>
      <Navigation
        leftIcon="back"
        rightIcon="home"
        onLeftIconClick={() => history.goBack()}
        onRightIconClick={() => history.push('/')}
      />

      <Title top={loading ? 88 : 143} />

      <FlexContainer top={loading ? 180 : 235}>
        {loading ? (
          <Loading />
        ) : (
          <Form guides={guides} submitId={params.submitId} />
        )}
      </FlexContainer>
    </>
  );
};

export default HireResult;
