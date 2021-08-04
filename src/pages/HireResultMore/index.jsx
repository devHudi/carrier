import { Navigation, Container } from 'carrier-ui';
import { useHistory } from 'react-router-dom';
import Title from './components/Title';
import Form from './components/Form';

const HireResultMore = () => {
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

      <Container top={170}>
        <Form history={history} />
      </Container>
    </>
  );
};

export default HireResultMore;
