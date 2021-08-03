import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firestore } from 'misc/firebase';
import { Container, Navigation, ProgressBar } from 'carrier-ui';

import Title from './components/Title';
import Form from './components/Form';
import LoginGuide from './components/LoginGuide';

const Hire = () => {
  const [step, setStep] = useState(1);
  const [login, setLogin] = useState(false);
  const [submitId, setSubmitId] = useState();

  const history = useHistory();

  const onNextClick = () => {
    setStep(step + 1);
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

  // dummy data
  const currentUser = {
    uid: undefined,
  };

  const onSubmit = async (data) => {
    const docRef = await firestore.collection('submits').add({
      ...data,
      employer_uid: null,
      created_at: new Date(),
      updated_at: new Date(),
    });

    setSubmitId(docRef.id);

    if (currentUser) {
      setLogin(true);
    }
  };

  return (
    <>
      {login && <LoginGuide submitId={submitId} />}

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
        <Form step={step} onSubmit={onSubmit} />
      </Container>
    </>
  );
};

export default Hire;
