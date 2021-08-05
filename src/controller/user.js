import { firestore, storage } from 'misc/firebase';

// 유저이름 변경
export const changeUserName = (uid, name) =>
  firestore.collection('users').doc(uid).update({
    name,
  });

// 유저 프로필 이미지 변경 (Storage 에 업로드하고, Firestore 유저 도큐먼트 갱신)
export const changeUserProfileImage = async (uid, file) => {
  const storageRef = storage.ref();

  const fileExtension = file.name.split('.')[file.name.split('.').length - 1];
  const profileImageRef = storageRef.child(
    `profileImages/${uid}.${fileExtension}`,
  );

  const uploadedFile = await profileImageRef.put(file);
  const filePath = await uploadedFile.ref.getDownloadURL();

  firestore.collection('users').doc(uid).update({
    profile_image: filePath,
  });
};
