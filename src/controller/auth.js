import _ from 'lodash';
import namer from 'korean-name-generator';
import { firestore, auth } from 'misc/firebase';
import pick from 'misc/pick';
import placeData from 'assets/data/placeData';
import profileImageData from 'assets/data/profileImageData';

import { createGuideProfile } from 'controller/guideProfile';

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
    like_employees: [],
    type: 'employer',
    amdin: false,
    review_created: [],
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
  profileImage = '',
  noAuth = false,
) => {
  const userDoc = {
    created_at: new Date(),
    updated_at: new Date(),
    email,
    name,
    profile_image: profileImage,
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
    await userRef.update({ uid: userRef.id, dummy: true });
    return userRef.id;
  }

  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  return firestore
    .collection('users')
    .doc(user.uid)
    .set({ ...userDoc, uid: user.uid });
};

// 샘플 가이드 생성하기
export const createGuides = async (count = 1) => {
  const guides = [];

  const uids = await Promise.all(
    _.map(Array.from(Array(count)), () => {
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

      const email = `${Math.random().toString(36).substr(2, 11)}@guide.com`;
      const name = namer.generate(true);
      const password = '12341234';
      const sido = pick(sidos, 1)[0];
      const places = _.chain(placeData)
        .filter((place) => place.sido === sido)
        .map((place) => place.name)
        .value();

      const pickedThemes = pick(themes);
      const pickedPlaces = pick(places);
      const pickedLanguages = pick(languages);
      const pickedGuideTypes = pick(guideTypes);
      const rndHireCount = _.random(0, 100);
      const rndLikeCount = _.random(0, 100);
      const rndProfileImage =
        profileImageData[_.random(0, profileImageData.length - 1)];

      const uid = signUpAsGuide(
        email,
        name,
        password,
        pickedThemes,
        sido,
        pickedPlaces,
        pickedLanguages,
        pickedGuideTypes,
        rndHireCount,
        rndLikeCount,
        rndProfileImage,
        true,
      );

      guides.push({
        email,
        name,
        themes: pickedThemes,
        place: { sido, places: pickedPlaces },
        languages: pickedLanguages,
        guide_types: pickedGuideTypes,
        profile_image: rndProfileImage,
        created_at: new Date(),
        updated_at: new Date(),
        type: 'employee',
      });

      return uid;
    }),
  );

  await Promise.all(
    _.map(uids, (uid, idx) => {
      guides[idx].uid = uid;
      return createGuideProfile(uid);
    }),
  );

  const indexedGuides =
    (await firestore.collection('indexed_guides').doc('guides').get()).data()
      ?.guides || [];

  await firestore
    .collection('indexed_guides')
    .doc('guides')
    .set({
      guides: [...indexedGuides, ...guides],
    });
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

// 로그아웃
export const signOut = () => auth.signOut();
