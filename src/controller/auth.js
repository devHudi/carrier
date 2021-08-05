import { firestore, auth } from 'misc/firebase';

// 회원가입
export const signUp = async (email, name, password) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  const userDoc = {
    uid: user.uid,
    created_at: new Date(),
    updated_ap: new Date(),
    email,
    name,
    profile_image: null,
    type: 'employer',
  };

  return firestore.collection('users').doc(user.uid).set(userDoc);
};

// 로그인
export const signIn = async (email, password, submitId = null) => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);

  // 선택지 작성 후 로그인 했을 경우
  if (submitId) {
    await firestore.collection('submits').doc(submitId).update({
      employer_uid: user.uid,
    });
  }

  return (await firestore.collection('users').doc(user.uid).get()).data();
};

// 현재 로그인 되어있는 유저 정보 가져오기
export const getCurrentUser = async () => {
  const user = await auth.currentUser;
  if (!user?.uid) return null;
  return (await firestore.collection('users').doc(user.uid).get()).data();
};
