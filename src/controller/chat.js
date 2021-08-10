import { firestore } from 'misc/firebase';

export const createChatRoom = async (employerUid, employeeUid) => {
  const chats = [];
  (
    await firestore
      .collection('chats')
      .where('employee_uid', '==', employeeUid)
      .get()
  ).forEach((querySnapshot) => chats.push(querySnapshot.ref));

  if (chats.length > 0) {
    return chats[0].id;
  }

  const employer = (
    await firestore.collection('users').doc(employerUid).get()
  ).data();
  const employee = (
    await firestore.collection('users').doc(employeeUid).get()
  ).data();

  const chatRef = firestore.collection('chats').doc();

  await firestore.collection('chats').doc(chatRef.id).set({
    created_at: new Date(),
    updated_at: new Date(),
    employee_uid: employeeUid,
    employee_name: employee.name,
    employee_profile_img: employee.profile_image,
    employer_uid: employerUid,
    employer_name: employer.name,
    employer_profile_img: employer.profile_image,
    review_creation_status: false,
    transaction_completed: false,
    isNewMessage: false,
    conversations: [],
  });

  return chatRef.id;
};
