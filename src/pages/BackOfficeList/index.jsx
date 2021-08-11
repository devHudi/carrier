import React, { useState, useEffect } from 'react';
import { Spinner } from 'carrier-ui';
import { firestore, auth } from '../../misc/firebase';
import ChatRoom from './Component/ChatRoom';

const ChatList = () => {
  const [chatRoomList, setChatRoomList] = useState([]);
  const [user, setUser] = useState('');
  const [userObj, setUserObj] = useState();
  const [isLoading, setIsLoading] = useState(true);

  auth.onAuthStateChanged((u) => {
    setUserObj(u);
  });

  useEffect(() => {
    console.log({ user });
  }, [user]);

  useEffect(async () => {
    if (userObj) {
      await firestore
        .collection('users')
        .doc(userObj?.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data().type);
          } else {
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    }
  }, [userObj]);

  useEffect(() => {
    firestore
      .collection('chats')
      .orderBy('updated_at', 'desc')
      .onSnapshot((snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChatRoomList(list);
      });
    setIsLoading(false);
  }, [user]);

  return (
    <>
      {isLoading && <Spinner />}
      {chatRoomList.map((chat) => (
        <ChatRoom userObj={chat} />
      ))}
    </>
  );
};
export default ChatList;
