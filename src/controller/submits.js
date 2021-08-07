import { firestore } from 'misc/firebase';

export const addSubmit = (sido, place, data) =>
  firestore.collection('submits').add({
    sido,
    place,
    ...data,
    employer_uid: null,
    created_at: new Date(),
    updated_at: new Date(),
  });
