import { firestore } from 'misc/firebase';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import Margin from 'carrier-ui/Margin';
import HorizonNextButton from './components/HorizonNextButton';
import Outline from './components/Outline';
import Container from './components/Container';
import img from './image/그룹 373@2x.png';

firestore
  .collection('users')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });

const MainContainer = createGlobalStyle`
  *{
    background-color: #E6E6E6;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24pt;
  margin-top: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14pt;
  color: ${(props) => props.theme.colors.white};
  background-color: rgba(47, 138, 241, 0.1);
  margin-bottom: -12px;
`;

const ForGuide = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8pt;
  color: #fbfbfb;
  background-color: rgba(47, 138, 241, 0.1);
  margin-top: 10px;
  text-decoration: underline;
`;

const Content = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Intro = () => (
  <>
    <MainContainer />
    <Logo>CARRIER</Logo>
    <Margin size={110} />
    <Content>
      <img width="375px" src={img} />
      <Outline />
    </Content>
    <Container>
      <Text>어디로 떠나시나요?</Text>
      <Link to="/search">
        <HorizonNextButton
          onClick={() => {
            // history.push('/search');
          }}
        />
      </Link>
      <ForGuide
        onClick={() => {
          // history.push('/');
        }}
      >
        로그인/회원가입
      </ForGuide>
    </Container>
  </>
);

export default Intro;
