import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { Navigation, Spinner } from 'carrier-ui';

import { auth } from 'misc/firebase';
import { getGuideProfile } from 'controller/guideProfile';
import { getReviews } from 'controller/review';

import ProfileForm from './components/ProfileForm';
import Form from './components/Form';

const GlobalStyle = createGlobalStyle`
  body {
    background: #EEEFFF 0% 0% no-repeat padding-box;
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  top: ${(props) => (props.top ? `${props.top}px` : 'initial')};
  bottom: 0;
  padding: 25px;
  padding-top: 0;
  width: 100%;
`;

const GuideProfile = () => {
  const history = useHistory();
  const id = useParams();
  const [user, setUser] = useState();
  const [guide, setGuide] = useState();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  auth.onAuthStateChanged((u) => {
    setUser(u);
  });

  useEffect(() => {
    const doWork = async () => {
      setLoading(true);
      setGuide(await getGuideProfile(id.uid));
      setLoading(false);
    };

    doWork();
  }, []);

  useEffect(() => {
    const doWork = async () => {
      if (guide) {
        setLoading(true);
        setReviews(await getReviews(guide.uid));
        setLoading(false);
      }
    };

    doWork();
  }, [guide]);

  return (
    <>
      {loading && <Spinner />}

      <GlobalStyle />
      <Navigation
        leftIcon="back"
        rightIcon="home"
        iconColor="#000000"
        position="relative"
        onLeftIconClick={() => history.goBack()}
        onRightIconClick={() => history.push('/')}
      />

      <Container top={0}>
        <ProfileForm guide={guide} reviews={reviews} />
      </Container>
      <Container top={60}>
        <Form user={user} guide={guide} reviews={reviews} />
      </Container>
    </>
  );
};

export default GuideProfile;
