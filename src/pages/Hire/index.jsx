import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { firestore } from 'misc/firebase';
import { Container, Navigation, ProgressBar, PageSpinner } from 'carrier-ui';

import Title from './components/Title';
import Form from './components/Form';
import LoginGuide from './components/LoginGuide';

const Hire = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    toast(); // Toast 라이브러리 버그 해결
  }, []);

  const validData = (data) => {
    if (data.like_themes.length <= 0)
      return '선호 테마를 최소 하나 선택해주세요.';
    if (data.dislike_themes.length <= 0)
      return '불호 테마를 최소 하나 선택해주세요.';
    if (data.guides.length <= 0) return '가이드 유형을 최소 하나 선택해주세요.';
    if (data.adult_headcount <= 0 && data.kid_headcount <= 0)
      return '인원 수 입력을 해주세요';
    return null;
  };

  const onSubmit = async (data) => {
    console.log(data);
    const valid = validData(data);
    if (valid) {
      console.log(valid);
      toast(valid);
      setStep(3);
      setLoading(false);
      return;
    }

    setLoading(true);

    const docRef = await firestore.collection('submits').add({
      ...data,
      employer_uid: null,
      created_at: new Date(),
      updated_at: new Date(),
    });

    setSubmitId(docRef.id);

    setLoading(false);

    if (currentUser) {
      setLogin(true);
    }
  };

  return (
    <>
      {loading && <PageSpinner />}
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
