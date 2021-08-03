import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Navigation, ProgressBar } from 'carrier-ui';

import Title from './components/Title';
import Form from './components/Form';

const Hire = () => {
  const [step, setStep] = useState(1);

  const history = useHistory();

  const onNextClick = () => {
    if (step < 3) setStep(step + 1);
    else history.push('/hire/result');
  };

  const onProgressBarClick = (_step) => {
    setStep(_step);
  };

  const onLeftIconClick = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      history.push('/');
    }
  };

  return (
    <>
      <Navigation
        leftIcon="back"
        rightIcon="home"
        onLeftIconClick={onLeftIconClick}
        onRightIconClick={() => history.push('/')}
      >
        <ProgressBar size={3} current={step} onClick={onProgressBarClick} />
      </Navigation>

      <Title step={step} onNextClick={onNextClick} />

      <Container top={263}>
        <Form step={step} />
      </Container>
    </>
  );
};

export default Hire;
