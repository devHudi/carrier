import _ from 'lodash';
import firebase, { firestore } from 'misc/firebase';

// 좋아요 리스트에 없으면 추가를, 있으면 제거를 합니다.
export const likeGuide = async (employerUid, employeeUid) => {
  const likeEmployees =
    (await firestore.collection('users').doc(employerUid).get()).data()
      ?.like_employees || [];

  if (_.includes(likeEmployees, employeeUid)) {
    await firestore
      .collection('users')
      .doc(employerUid)
      .update({
        like_employees: firebase.firestore.FieldValue.arrayRemove(employeeUid),
      });

    await firestore
      .collection('users')
      .doc(employeeUid)
      .update({
        liked_count: firebase.firestore.FieldValue.increment(-1),
      });
  } else {
    await firestore
      .collection('users')
      .doc(employerUid)
      .update({
        like_employees: firebase.firestore.FieldValue.arrayUnion(employeeUid),
      });

    await firestore
      .collection('users')
      .doc(employeeUid)
      .update({
        liked_count: firebase.firestore.FieldValue.increment(1),
      });
  }
};
