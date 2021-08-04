import styled from 'styled-components';
import { Navigation, Container } from 'carrier-ui';
import { useHistory } from 'react-router-dom';
import Form from './components/Form';
import Title from './components/Title';

const FlexContainer = styled(Container)`
  display: flex;
`;

const HireResult = () => {
  const history = useHistory();

  return (
    <>
      <Navigation
        leftIcon="back"
        rightIcon="home"
        onLeftIconClick={() => history.goBack()}
        onRightIconClick={() => history.push('/')}
      />

      <Title />

      <FlexContainer top={263}>
        <Form />
      </FlexContainer>
    </>
  );
};

export default HireResult;
