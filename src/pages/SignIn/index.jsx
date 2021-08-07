import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { Margin } from 'carrier-ui';
import Input from './components/Input';
import Button from './components/Button';
import person from '../SignUp/assets/Icon material-person.svg';

const GlobalStyle = createGlobalStyle`
  *{
    background-color: ${(props) => props.theme.colors.white};
  }
`;
// font-family: "san-serif";
// 비밀번호 입력 시 별표(*)로 표시되는지 확인 필요 (지원하지 않는 글꼴의 경우 패스워드 표시가 숨겨짐)

const MainContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0 10%;
`;

const Logo = styled.p`
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 800;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const TextWrapper = styled.p`
  font-size: 9pt;
  display: flex;
  flex-direction: row;
`;

const New = styled.p`
  color: #505050;
  margin-right: 12px;
`;

const SignUp = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  text-decoration: underline;
`;

const SignIn = () => (
  <>
    <GlobalStyle />
    <MainContainer>
      <Logo>CARRIER</Logo>
      <Margin size={56} />
      <InputContainer>
        <Input
          type="text"
          placeholder="아이디 또는 이메일 주소"
          icon={person}
        />
        <Input type="password" placeholder="비밀번호" />
      </InputContainer>
      <Margin size={40} />
      <Button content="로그인" />
      <Margin size={20} />
      <TextWrapper>
        <New>CARRIER가 처음이신가요?</New>
        <Link to="/sign-up">
          <SignUp>회원가입하기</SignUp>
        </Link>
      </TextWrapper>
    </MainContainer>
  </>
);

export default SignIn;
