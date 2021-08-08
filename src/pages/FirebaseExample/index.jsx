/* eslint-disable */

import { useState, useRef } from 'react';
import { firestore } from 'misc/firebase';
import styled from 'styled-components';
import {
  signUp,
  signUpAsGuide,
  signOut,
  createGuides,
  signIn,
  getCurrentUser,
} from 'controller/auth';
import { changeUserName, changeUserProfileImage } from 'controller/user';
import { addReview } from 'controller/review';
import { likeGuide } from 'controller/like';
import { getGuideProfile } from 'controller/guideProfile';

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

  const [guideSignUpForm, setGuideSignUpForm] = useState({
    email: '',
    name: '',
    password: '',
    themes: '',
    places: '',
    languages: '',
    guideType: '',
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

  const [likeForm, setLikeForm] = useState({
    employerUid: '',
    employeeUid: '',
  });

  const removeDummyGuide = async () => {
    const userDoc = await firestore
      .collection('users')
      .where('dummy', '==', true)
      .get();
    userDoc.forEach((doc) => {
      doc.ref.delete();
      console.log(`유저 삭제: ${doc.id}`);
    });

    const profileDoc = await firestore
      .collection('guide_profiles')
      .where('dummy', '==', true)
      .get();
    profileDoc.forEach((doc) => {
      doc.ref.delete();
      console.log(`가이드 프로필 삭제: ${doc.id}`);
    });
  };

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
        <Title>가이드로 회원가입</Title>
        <input
          type="email"
          onChange={(e) =>
            setGuideSignUpForm({ ...guideSignUpForm, email: e.target.value })
          }
          placeholder="이메일"
        />
        <input
          type="text"
          onChange={(e) =>
            setGuideSignUpForm({ ...guideSignUpForm, name: e.target.value })
          }
          placeholder="이름"
        />
        <input
          type="password"
          onChange={(e) =>
            setGuideSignUpForm({ ...guideSignUpForm, password: e.target.value })
          }
          placeholder="패스워드"
        />
        <input
          type="themes"
          onChange={(e) =>
            setGuideSignUpForm({ ...guideSignUpForm, name: e.target.value })
          }
          placeholder="테마"
        />
        <input
          type="places"
          onChange={(e) =>
            setGuideSignUpForm({ ...guideSignUpForm, name: e.target.value })
          }
          placeholder="지역"
        />
        <input
          type="languages"
          onChange={(e) =>
            setGuideSignUpForm({ ...guideSignUpForm, name: e.target.value })
          }
          placeholder="언어"
        />
        <input
          type="guideType"
          onChange={(e) =>
            setGuideSignUpForm({ ...guideSignUpForm, name: e.target.value })
          }
          placeholder="가이드 형태"
        />
        <button
          type="submit"
          onClick={async () => {
            const {
              email,
              name,
              password,
              themes,
              places,
              languages,
              guideType,
            } = guideSignUpForm;

            const _themes = themes.split(',');
            const _places = places.split(',');
            const _languages = languages.split(',');
            const _guideType = guideType.split(',');

            await signUpAsGuide(
              email,
              name,
              password,
              _themes,
              _places,
              _languages,
              _guideType,
            );
          }}
        >
          가입
        </button>
        <br />
        가이드 타입 : planner, companion, online
        <br />
        테마: date_course, flower, photo_zone, nature, ocean, hand_made,
        leisure_sports, souvenir, shopping, foodie, theme_park,
        cultural_heritage, history
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
          onClick={async () =>
            await signIn(signInForm.email, signInForm.password)
          }
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
        <button onClick={async () => await getCurrentUser()}>
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

      <Form>
        <Title>가이드 생성하기</Title>
        <button onClick={async () => await createGuides(1)}>
          가이드 1명 생성하기
        </button>
      </Form>

      <Form>
        <Title>가이드 좋아요</Title>

        <input
          type="text"
          onChange={(e) =>
            setLikeForm({ ...likeForm, employerUid: e.target.value })
          }
          placeholder="유저 UID"
        />
        <input
          type="text"
          onChange={(e) =>
            setLikeForm({ ...likeForm, employeeUid: e.target.value })
          }
          placeholder="유저 UID"
        />
        <button
          onClick={async () =>
            await likeGuide(likeForm.employerUid, likeForm.employeeUid)
          }
        >
          좋아요 or 좋아요해제
        </button>
      </Form>

      <Form>
        <Title>로그아웃</Title>
        <button onClick={async () => await signOut()}>로그아웃</button>
      </Form>

      <Form>
        <Title>가이드 프로파일 가져오기</Title>
        <button
          onClick={async () =>
            console.log(await getGuideProfile('0CwpXtxoMpNPo4393aDw'))
          }
        >
          가이드 프로파일
        </button>
      </Form>

      <Form>
        <Title>더미가이드 모두 제거</Title>
        <button onClick={async () => await removeDummyGuide()}>
          더미가이드 제거
        </button>
      </Form>
    </>
  );
};

export default FirebaseExample;
