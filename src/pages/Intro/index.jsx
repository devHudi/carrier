import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Margin } from 'carrier-ui';
import logo from 'assets/images/logo-text-black.png';
import HorizonNextButton from './components/HorizonNextButton';
import Outline from './components/Outline';
import Container from './components/Container';
import img from './image/intro.png';

const Logo = styled.img`
  width: 92px;
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
  margin-top: 14px;
  text-decoration: underline;
`;

const Content = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1vh;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Intro = () => (
  <>
    <Wrapper>
      <SubWrapper>
        <Margin size={30} />
        <Logo src={logo} />
        <Content>
          <Margin size={90} />
          <img width="375px" src={img} />
          <Outline />
        </Content>
      </SubWrapper>
      <Container>
        <Text>어디로 떠나시나요?</Text>
        <Link to="/search">
          <HorizonNextButton />
        </Link>
        <Link to="/sign-in">
          <ForGuide>로그인하러 가기</ForGuide>
        </Link>
      </Container>
    </Wrapper>
  </>
);

export default Intro;
