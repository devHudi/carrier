import styled, { createGlobalStyle } from 'styled-components';
import { useHistory } from 'react-router-dom';

import Profile from './components/Profile';
import Form from './components/Form';
import Navigation from './components/Navigation';

const GlobalStyle = createGlobalStyle`
  body {
    background: #EEEFFF 0% 0% no-repeat padding-box;
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}px` : 'initial')};
  bottom: 0;
  padding: 35px;
  padding-top: 0;
  width: 100%;
  overflow: scroll;
`;

const GuideProfile = () => {
  const history = useHistory();

  return (
    <>
      <GlobalStyle />
      <Navigation leftIcon="back" onLeftIconClick={() => history.goBack()} />
      <Container top={80}>
        <Profile />
      </Container>
      <Container top={400}>
        <Form />
      </Container>
    </>
  );
};

export default GuideProfile;
