import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Navigation, Container } from 'carrier-ui';
import { useHistory } from 'react-router-dom';
import Loading from './components/Loading';
import Form from './components/Form';
import Title from './components/Title';

const FlexContainer = styled(Container)`
  display: flex;
`;

const HireResult = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
        {loading ? <Loading /> : <Form />}
      </FlexContainer>
    </>
  );
};

export default HireResult;
