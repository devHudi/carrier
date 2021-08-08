import _ from 'lodash';
import { firestore } from 'misc/firebase';
import pick from 'misc/pick';
import guideProfileData from 'assets/data/guideProfileData';

// guide_profiles Collection 에 더미 데이터를 생성합니다.
export const createGuideProfile = async (employeeUid) => {
  const introduction = pick([...guideProfileData.introductions], 1)[0];
  const startTime = pick([...guideProfileData.available_times.starts], 1)[0];
  const endTime = pick([...guideProfileData.available_times.ends], 1)[0];
  const faq = pick([...guideProfileData.faqs], 2);

  const user = (
    await firestore.collection('users').doc(employeeUid).get()
  ).data();

  const prices = {};
  _.forEach(user.guide_types, (type) => {
    prices[type] = Math.floor(_.random(15000, 50000) / 1000) * 1000;
  });

  const profileDocs = {
    employee_uid: employeeUid,
    created_at: new Date(),
    updated_at: new Date(),
    introduction,
    available_time: {
      start: startTime,
      end: endTime,
    },
    prices,
    faq,
    dummy: true,
  };

  console.log(profileDocs, employeeUid);

  return (await firestore.collection('guide_profiles').doc(employeeUid)).set(
    profileDocs,
  );
};

// users Collection 과 guide_profiles Collection 을 가져와 합칩니다
export const getGuideProfile = async (employeeUid) => {
  const user = (
    await firestore.collection('users').doc(employeeUid).get()
  ).data();

  const profile = (
    await firestore.collection('guide_profiles').doc(employeeUid).get()
  ).data();

  return { ...user, ...profile };
};
