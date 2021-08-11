import styled, { keyframes } from 'styled-components';
import { Margin, Spinner } from 'carrier-ui';

import { getReviewsFromEmployer } from 'controller/review';

import { useEffect, useState } from 'react';
import { auth, firestore } from 'misc/firebase';
import GuideMatching from './GuideMatching';
import TravelerReview from './TravelerReview';
import InterestGuide from './InterestGuide';

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

const TravelerForm = () => {
  const [user, setUser] = useState();
  const [uid, setUid] = useState();
  const [likeEmployees, setLikeEmployees] = useState();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  auth.onAuthStateChanged((u) => {
    setUser(u);
    setUid(u.uid);
  });
  console.log(user);
  // console.log(uid);

  useEffect(() => {
    firestore
      .collection('users')
      .doc(uid)
      .get()
      .then((doc) => {
        setLikeEmployees(doc.data()?.like_employees);
      });
  }, [uid]);
  // console.log(userName);
  // console.log(likeEmployees);

  useEffect(() => {
    const doWork = async () => {
      if (uid) {
        setLoading(true);
        setReviews(await getReviewsFromEmployer(uid));
        setLoading(false);
      }
    };

    doWork();
  }, [uid]);
  console.log(reviews);
  return (
    <>
      {loading && <Spinner />}

      <FormWrapper>
        <Margin size={20} />
        <InterestGuide likeEmployees={likeEmployees} />
        <Margin size={20} />
        <GuideMatching />
        <Margin size={20} />
        <TravelerReview reviews={reviews} />
        <Margin size={120} />
      </FormWrapper>
    </>
  );
};

export default TravelerForm;
