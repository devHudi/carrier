import { firestore } from 'misc/firebase';

// 리뷰 작성
export const addReview = (employerUid, employeeUid, score, comment) => {
  if (score > 5 || score < 0)
    throw Error('리뷰 점수는 0부터 5사이의 수여야 합니다.');

  firestore.collection('reviews').add({
    created_at: new Date(),
    updated_at: new Date(),
    employer_uid: employerUid,
    employee_uid: employeeUid,
    score,
    comment,
  });
};
