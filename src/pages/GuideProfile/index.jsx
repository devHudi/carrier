import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { getGuideProfile } from 'controller/guideProfile';
import { Navigation, Spinner } from 'carrier-ui';

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
  const [guide, setGuide] = useState('');
  const [loading, setLoading] = useState(false);

  console.log(id.uid);
  useEffect(() => {
    const doWork = async () => {
      setLoading(true);
      const _guide = await getGuideProfile(id.uid);
      console.log({ _guide });
      setGuide(_guide);
      setLoading(false);
    };

    doWork();
  }, []);

  console.log({ guide });

  return (
    <>
      {loading && <Spinner />}
      <GlobalStyle />
      <Navigation
        leftIcon="back"
        rightIcon="home"
        iconColor="#000000"
        onLeftIconClick={() => history.goBack()}
        onRightIconClick={() => history.push('/')}
      />
      <Container top={0}>
        <ProfileForm guide={guide} />
      </Container>
      <Container top={60}>
        <Form guide={guide} />
      </Container>
    </>
  );
};

export default GuideProfile;
