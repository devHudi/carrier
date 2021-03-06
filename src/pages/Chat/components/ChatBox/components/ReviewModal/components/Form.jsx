import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-simple-toasts';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { addReview } from 'controller/review';
import { firestore } from 'misc/firebase';
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
`;
const Form = ({ ontoggle }) => {
  const [review, setReview] = useState('');
  const [score, setScore] = useState(5);
  const { uid } = useParams();
  const onSubmit = async (e) => {
    e.preventDefault();
    ontoggle();
    const chat = (await firestore.collection('chats').doc(uid).get()).data();
    await firestore.collection('chats').doc(uid).update({
      review_creation_status: true,
    });
    await addReview(chat?.employer_uid, chat?.employee_uid, score, review);
    toast('리뷰가 정상적으로 등록되었습니다.', 1000);
  };
  const onChangeReview = useCallback((e) => {
    setReview(e.target.value);
  }, []);
  const onChangeScore = (value) => {
    setScore(value);
  };
  return (
    <FormWrapper>
      <CloseButton ontoggle={ontoggle} />
      <Title />
      <StarRatingForm value={score} onChangeScore={onChangeScore} />
      <TextReview value={review} onChangeReview={onChangeReview} />
      <ReviewButton onClick={onSubmit} />
    </FormWrapper>
  );
};

Form.propTypes = {
  ontoggle: PropTypes.func.isRequired,
};
export default Form;
