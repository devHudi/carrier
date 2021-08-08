import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import toast from 'react-simple-toasts';
import { Margin, RoundedButton, Spinner } from 'carrier-ui';
import { useQuery } from 'hooks';
import { signIn } from 'controller/auth';

import Input from './components/Input';

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

const SignIn = () => {
  const history = useHistory();
  const query = useQuery();
  const submitId = query.get('submitId');

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInClick = async () => {
    const { email, password } = form;

    setLoading(true);

    try {
      await signIn(email, password);

      toast('로그인 성공하였습니다!');

      if (submitId) history.push(`/hire/${submitId}/result`);
      else history.push('/');
    } catch (e) {
      const { code } = e;
      if (code === 'auth/invalid-email' || code === 'auth/wrong-password')
        toast('이메일 혹은 비밀번호를 다시 확인해주세요.');
      else if (code === 'auth/user-not-found')
        toast('존재하지 않는 유저입니다.');
      else toast(`알 수 없는 에러가 발생했습니다. (${code})`);
    }

    setLoading(false);
  };

  const onSignUpClick = () => {
    if (submitId) history.push(`/sign-up?submitId=${submitId}`);
    else history.push('/sign-up');
  };

  return (
    <>
      {loading && <Spinner />}
      <MainContainer>
        <Logo>CARRIER</Logo>
        <Margin size={56} />
        <InputContainer>
          <Input
            type="text"
            placeholder="아이디 또는 이메일 주소"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </InputContainer>
        <Margin size={40} />
        <RoundedButton filled blue onClick={onSignInClick}>
          로그인
        </RoundedButton>
        <Margin size={20} />
        <TextWrapper>
          <New>CARRIER가 처음이신가요?</New>
          <SignUp onClick={onSignUpClick}>회원가입하기</SignUp>
        </TextWrapper>
      </MainContainer>
    </>
  );
};

export default SignIn;
