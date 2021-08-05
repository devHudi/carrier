/* eslint-disable */

import { useState, useRef } from 'react';
import styled from 'styled-components';
import { signUp, signIn, getCurrentUser } from 'controller/auth';
import { changeUserName, changeUserProfileImage } from 'controller/user';
import { addReview } from 'controller/review';

const Form = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FirebaseExample = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const [signInSubmitForm, setSignInSubmitForm] = useState({
    email: '',
    password: '',
    submitId: '',
  });

  const [nameForm, setNameForm] = useState({
    uid: '',
    name: '',
  });

  const file = useRef();
  const [profileImageUid, setProfileImageUid] = useState();

  const [reviewForm, setReviewForm] = useState({
    employerUid: '',
    employeeUid: '',
    score: 0,
    comment: '',
  });

  return (
    <>
      <Form>
        <Title>회원가입</Title>
        <input
          type="email"
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, email: e.target.value })
          }
          placeholder="이메일"
        />
        <input
          type="text"
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, name: e.target.value })
          }
          placeholder="이름"
        />
        <input
          type="password"
          onChange={(e) =>
            setSignUpForm({ ...signUpForm, password: e.target.value })
          }
          placeholder="패스워드"
        />
        <button
          type="submit"
          onClick={async () => {
            await signUp(
              signUpForm.email,
              signUpForm.name,
              signUpForm.password,
            );
          }}
        >
          가입
        </button>
      </Form>

      <Form>
        <Title>로그인</Title>
        <input
          type="email"
          onChange={(e) =>
            setSignInForm({ ...signInForm, email: e.target.value })
          }
          placeholder="이메일"
        />
        <input
          type="password"
          onChange={(e) =>
            setSignInForm({ ...signInForm, password: e.target.value })
          }
          placeholder="패스워드"
        />
        <button
          type="submit"
          onClick={async () => {
            console.log(signInForm.password);
            console.log(await signIn(signInForm.email, signInForm.password));
          }}
        >
          로그인
        </button>
      </Form>

      <Form>
        <Title>선택지 작성 후 로그인</Title>
        <input
          type="email"
          onChange={(e) =>
            setSignInSubmitForm({ ...signInSubmitForm, email: e.target.value })
          }
          placeholder="이메일"
        />
        <input
          type="password"
          onChange={(e) =>
            setSignInSubmitForm({
              ...signInSubmitForm,
              password: e.target.value,
            })
          }
          placeholder="패스워드"
        />
        <input
          type="text"
          onChange={(e) =>
            setSignInSubmitForm({
              ...signInSubmitForm,
              submitId: e.target.value,
            })
          }
          placeholder="SUBMIT ID"
        />
        <button
          type="submit"
          onClick={async () => {
            await signIn(
              signInSubmitForm.email,
              signInSubmitForm.password,
              signInSubmitForm.submitId,
            );
          }}
        >
          로그인
        </button>
      </Form>

      <Form>
        <Title>로그인된 유저 가져오기</Title>
        <button
          onClick={async () => {
            console.log(await getCurrentUser());
          }}
        >
          로그인된 유저 가져오기
        </button>
      </Form>

      <Form>
        <Title>유저 이름 변경</Title>

        <input
          type="text"
          onChange={(e) => setNameForm({ ...nameForm, uid: e.target.value })}
          placeholder="유저 UID"
        />
        <input
          type="text"
          onChange={(e) => setNameForm({ ...nameForm, name: e.target.value })}
          placeholder="이름"
        />
        <button
          onClick={async () =>
            await changeUserName(nameForm.uid, nameForm.name)
          }
        >
          변경
        </button>
      </Form>

      <Form>
        <Title>유저 프로필 이미지 변경</Title>

        <input
          type="text"
          onChange={(e) => setProfileImageUid(e.target.value)}
          placeholder="UID"
        />
        <input type="file" ref={file} />
        <button
          onClick={async () =>
            await changeUserProfileImage(profileImageUid, file.current.files[0])
          }
        >
          변경
        </button>
      </Form>

      <Form>
        <Title>리뷰작성</Title>

        <input
          type="text"
          onChange={(e) =>
            setReviewForm({ ...reviewForm, employerUid: e.target.value })
          }
          placeholder="Employer UID (리뷰다는 사람)"
        />
        <input
          type="text"
          onChange={(e) =>
            setReviewForm({ ...reviewForm, employeeUid: e.target.value })
          }
          placeholder="Employee UID (가이드)"
        />
        <input
          type="number"
          min={0}
          max={5}
          onChange={(e) =>
            setReviewForm({ ...reviewForm, score: e.target.value })
          }
          placeholder="점수 (0~5)"
        />
        <input
          type="text"
          onChange={(e) =>
            setReviewForm({ ...reviewForm, comment: e.target.value })
          }
          placeholder="리뷰 내용"
        />
        <button
          onClick={async () =>
            await addReview(
              reviewForm.employerUid,
              reviewForm.employeeUid,
              Number(reviewForm.score),
              reviewForm.comment,
            )
          }
        >
          변경
        </button>
      </Form>
    </>
  );
};

export default FirebaseExample;
