import _ from 'lodash';
import namer from 'korean-name-generator';
import { firestore, auth } from 'misc/firebase';
import placeData from 'assets/data/placeData';

const pick = (arr, length) => {
  const _arr = arr;
  const count = length || _.random(1, _arr.length - 1);
  const picks = [];
  for (let i = 0; i < count; i += 1) {
    const p = _arr.splice(_.random(0, _arr.length - 1), 1)[0];
    picks.push(p);
  }
  return picks;
};

// 회원가입
export const signUp = async (email, name, password) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  const userDoc = {
    uid: user.uid,
    created_at: new Date(),
    updated_at: new Date(),
    email,
    name,
    profile_image:
      'https://firebasestorage.googleapis.com/v0/b/likelion-carrier.appspot.com/o/profileImages%2Fdefault.png?alt=media',
    type: 'employer',
  };

  return firestore.collection('users').doc(user.uid).set(userDoc);
};

// 가이드 회원가입
export const signUpAsGuide = async (
  email,
  name,
  password,
  themes,
  sido,
  places,
  languages,
  guideTypes,
  hiredCount = 0,
  likedCount = 0,
  noAuth = false,
) => {
  const userDoc = {
    created_at: new Date(),
    updated_at: new Date(),
    email,
    name,
    profile_image:
      'https://firebasestorage.googleapis.com/v0/b/likelion-carrier.appspot.com/o/profileImages%2Fdefault.png?alt=media',
    type: 'employee',
    themes,
    place: { sido, places },
    languages,
    guide_types: guideTypes,
    hired_count: hiredCount,
    liked_count: likedCount,
  };

  if (noAuth) {
    const userRef = firestore.collection('users').doc();
    userRef.set(userDoc);
    return userRef.update({ uid: userRef.id });
  }

  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  return firestore
    .collection('users')
    .doc(user.uid)
    .set({ ...userDoc, uid: user.uid });
};

// 샘플 가이드 생성하기
export const createGuides = async (count) => {
  const themes = [
    'date_course',
    'flower',
    'photo_zone',
    'nature',
    'ocean',
    'hand_made',
    'leisure_sports',
    'souvenir',
    'shopping',
    'foodie',
    'theme_park',
    'cultural_heritage',
    'history',
  ];
  const sidos = _.map(placeData, (place) => place.sido);
  const languages = ['english', 'japanese', 'chinese', 'etc'];
  const guideTypes = ['planner', 'companion', 'online'];

  const promises = [];
  for (let i = 0; i < count; i += 1) {
    const email = `${Math.random().toString(36).substr(2, 11)}@guide.com`;
    const name = namer.generate(true);
    const password = '12341234';
    const sido = pick(sidos, 1)[0];
    const places = _.chain(placeData)
      .filter((place) => place.sido === sido)
      .map((place) => place.name)
      .value();

    promises.push(
      signUpAsGuide(
        email,
        name,
        password,
        pick(themes),
        sido,
        pick(places),
        pick(languages),
        pick(guideTypes),
        _.random(0, 100),
        _.random(0, 100),
        true,
      ),
    );
  }

  await Promise.all(promises);
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

// 로그아웃
export const signOut = () => auth.signOut();
