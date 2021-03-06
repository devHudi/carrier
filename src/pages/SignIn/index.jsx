import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import toast from 'react-simple-toasts';
import { Margin, RoundedButton, Spinner, PageCenter } from 'carrier-ui';
import { useQuery } from 'hooks';
import { signIn } from 'controller/auth';
import logoI from 'assets/images/logo-image.png';
import logoT from 'assets/images/logo-text.png';
import person from './assets/person.svg';
import lock from './assets/lock.svg';

import Input from './components/Input';

const LogoI = styled.img`
  width: 67px;
`;

const LogoT = styled.img`
  width: 125px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      await signIn(email, password, submitId);

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
      <PageCenter>
        <LogoI src={logoI} />
        <Margin size={10} />
        <LogoT src={logoT} />
        <Margin size={56} />
        <InputContainer>
          <Input
            type="text"
            placeholder="아이디 또는 이메일 주소"
            icon={person}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            icon={lock}
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
      </PageCenter>
    </>
  );
};
export default SignIn;
