import styled, { createGlobalStyle } from 'styled-components';
import { useHistory } from 'react-router-dom';
import ProfileForm from './components/ProfileForm';
import Navigation from './components/Navigation';

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

const ProfileEdit = () => {
  const history = useHistory();
  console.log('여기는 오니');
  return (
    <>
      <GlobalStyle />
      <Navigation
        leftIcon="back"
        rightIcon="home"
        onLeftIconClick={() => history.goBack()}
      />
      <Container top={0}>
        <ProfileForm />
      </Container>
    </>
  );
};

export default ProfileEdit;
