import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import toast from 'react-simple-toasts';
import { Margin, RoundedButton, Spinner, PageCenter } from 'carrier-ui';
import { useQuery } from 'hooks';
import { signUp } from 'controller/auth';

import Input from '../SignIn/components/Input';
import Welcome from './components/Welcome';
import UserType from './components/UserType';
import person from '../SignIn/assets/person.svg';
import mail from '../SignIn/assets/email.svg';
import lock from '../SignIn/assets/lock.svg';

// 비밀번호 입력 시 별표(*)로 표시되는지 확인 필요 (지원하지 않는 글꼴의 경우 패스워드 표시가 숨겨짐)

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
  width: 100%;
`;

function SignUp() {
  const history = useHistory();
  const query = useQuery();
  const submitId = query.get('submitId');

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  const onSignUpClick = async () => {
    const { email, name, password } = form;

    setLoading(true);

    if (!email || !name || !password) {
      toast('내용을 채워주세요.');
      setLoading(false);
      return;
    }

    try {
      await signUp(email, name, password);

      toast(`회원가입에 성공하였습니다. 환영합니다, ${name}님`);

      if (submitId) history.push(`/sign-up/success?submitId=${submitId}`);
      else history.push('/sign-up/success');
    } catch (e) {
      const { code } = e;

      if (code === 'auth/email-already-in-use')
        toast('이미 사용중인 이메일 입니다.');
      else if (code === 'auth/invalid-email')
        toast('이메일 형식을 다시 확인해주세요.');
      else if (code === 'auth/weak-password')
        toast('패스워드가 취약합니다. 조금 더 길게 설정해주세요.');
      else toast(`알 수 없는 에러가 발생했습니다. (${code})`);
    }

    setLoading(false);
  };

  return (
    <>
      {loading && <Spinner />}

      <PageCenter>
        <MainContainer>
          <Welcome />
          <Margin size={69} />
          <UserType />
          <Margin size={56} />
          <InputContainer>
            <Input
              type="text"
              placeholder="이메일을 입력해주세요"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              icon={mail}
            />
            <Input
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              icon={person}
            />
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              icon={lock}
            />
          </InputContainer>
          <Margin size={90} />
          <RoundedButton filled blue onClick={onSignUpClick}>
            회원가입
          </RoundedButton>
        </MainContainer>
      </PageCenter>
    </>
  );
}

export default SignUp;
