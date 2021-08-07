import styled, { createGlobalStyle } from 'styled-components';
// import { Link } from 'react-router-dom';
import { Margin } from 'carrier-ui';
import Input from '../SignIn/components/Input';
import Button from '../SignIn/components/Button';
import Welcome from './components/Welcome';
import UserType from './components/UserType';

const GlobalStyle = createGlobalStyle`
  *{
    background-color: ${(props) => props.theme.colors.white};
  }
`;
// font-family: "san-serif";
// 비밀번호 입력 시 별표(*)로 표시되는지 확인 필요 (지원하지 않는 글꼴의 경우 패스워드 표시가 숨겨짐)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 100vh;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 100%;
`;

function SignUp() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <MainContainer>
          <Welcome />
          <Margin size={69} />
          <UserType />
          <Margin size={56} />
          <InputContainer>
            <Input type="text" placeholder="아이디를 입력해주세요" />
            <Input type="text" placeholder="이메일을 입력해주세요" />
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
          </InputContainer>
          <Margin size={90} />
          <Button content="회원가입" />
        </MainContainer>
      </Wrapper>
    </>
  );
}

export default SignUp;
