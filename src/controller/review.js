import { firestore } from 'misc/firebase';

// 리뷰 작성
export const addReview = async (employerUid, employeeUid, score, comment) => {
  if (score > 5 || score < 0)
    throw Error('리뷰 점수는 0부터 5사이의 수여야 합니다.');

  const employer = (
    await firestore.collection('users').doc(employerUid).get()
  ).data();

  const employee = (
    await firestore.collection('users').doc(employeeUid).get()
  ).data();

  firestore.collection('reviews').add({
    created_at: new Date(),
    updated_at: new Date(),
    employer_uid: employerUid,
    employer_name: employer.name,
    employee_uid: employeeUid,
    employee_name: employee.name,
    score,
    comment,
  });
};

// 리뷰 가져오기
export const getReviews = async (employeeUid) => {
  const reviews = [];
  (
    await firestore
      .collection('reviews')
      .where('employee_uid', '==', employeeUid)
      .get()
  ).forEach((querySnapshot) => reviews.push(querySnapshot.data()));

  return reviews;
};
