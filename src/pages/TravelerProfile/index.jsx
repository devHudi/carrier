import { useState, useEffect } from 'react';
import _ from 'lodash';
import styled, { createGlobalStyle } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { firestore, auth } from 'misc/firebase';
import ProfileForm from './components/ProfileForm';
import TravelerForm from './components/TravelerForm';
import Navigation from './components/Navigation';
import LoginGuide from './components/LoginGuide';

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

const TravelerProfile = () => {
  const [uid, setUid] = useState();
  const history = useHistory();
  const [guides, setGuides] = useState([]);

  auth.onAuthStateChanged((u) => {
    if (u?.uid) setUid(u?.uid);
  });

  useEffect(() => {
    const doWork = async () => {
      if (uid) {
        const completes = _.map(
          await Promise.all(
            _.map(
              (
                await firestore
                  .collection('chats')
                  .where('employer_uid', '==', uid)
                  .where('transaction_completed', '==', true)
                  .get()
              ).docs,
              (doc) =>
                firestore
                  .collection('users')
                  .doc(doc.data().employee_uid)
                  .get(),
            ),
          ),
          (doc) => doc.data(),
        );

        setGuides(completes);
      }
    };

    doWork();
  }, [uid]);
  console.log(uid);

  return (
    <>
      {uid === undefined && <LoginGuide />}

      <GlobalStyle />
      <Navigation
        leftIcon="back"
        rightIcon="home"
        onLeftIconClick={() => history.goBack()}
        onRightIconClick={() => history.push('/TravelerProfile/edit')}
      />
      <Container top={0}>
        <ProfileForm guides={guides} />
      </Container>
      <Container top={60}>
        <TravelerForm guides={guides} />
      </Container>
    </>
  );
};

export default TravelerProfile;
