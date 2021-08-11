import styled, { keyframes } from 'styled-components';
import CloseButton from './CloseButton';
import ReviewButton from './ReviewButton';
import StarRatingForm from './StarRatingForm';
import TextReview from './TextReview';
import Title from './Title';

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
  overflow: scroll;
`;

const Form = () => (
  <FormWrapper>
    <CloseButton />
    <Title />
    <StarRatingForm />
    <TextReview />
    <ReviewButton />
  </FormWrapper>
);

export default Form;
