import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Flex, Margin } from 'carrier-ui';
import Title from './Title';
import Map from './Map';
import Course from './Course';
import ProgressBar from './ProgressBar';
import Plus from './Plus';

const formFadeIn = keyframes`
  100% {
    opacity: 1
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0;
  animation-name: ${formFadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  margin: 0;
  padding: 0;
`;

const ChangedFormWrapper = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  opacity: 0;
  animation-name: ${formFadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  margin: 0;
  padding: 0;
`;

const Form = () => {
  const [step, setStep] = useState(1);
  const onProgressBarClick = (_step) => {
    setStep(_step);
  };

  return (
    <FormWrapper>
      <Title />
      <Margin size={20} />
      <Flex justify="center" align="center">
        <ProgressBar size={3} current={step} onClick={onProgressBarClick} />
      </Flex>
      <Margin size={20} />
      <ChangedFormWrapper visible={step === 1}>
        <Map step={1} />
        <Course step={1} />
      </ChangedFormWrapper>
      <ChangedFormWrapper visible={step === 2}>
        <Map step={2} />
        <Course step={2} />
      </ChangedFormWrapper>
      <ChangedFormWrapper visible={step === 3}>
        <Plus />
      </ChangedFormWrapper>
    </FormWrapper>
  );
};

export default Form;
