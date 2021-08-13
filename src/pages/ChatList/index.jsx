import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Spinner } from 'carrier-ui';
import toast from 'react-simple-toasts';
import { firestore, auth } from '../../misc/firebase';
import ChatNavigation from './Component/ChatListNav/style';
import Search from './Component/SearchBar/search';
import ChatRoom from './Component/ChatRoom';

const ChatList = () => {
  const [chatRoomList, setChatRoomList] = useState([]);
  const [classification, setClassification] = useState(false); // false 는 소비자
  const [user, setUser] = useState('');
  const [userObj, setUserObj] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //* *********************로그인한 사용자로부터 유저 데이터 가져오는 곳************************//
  const history = useHistory();
  auth.onAuthStateChanged((u) => {
    if (!u) {
      toast('로그인 후 사용가능합니다.', 1000);
      history.push('/');
    }
    setUserObj(u);
  });
  useEffect(async () => {
    if (userObj) {
      await firestore
        .collection('users')
        .doc(userObj?.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (doc.data.type === 'employee') {
              setClassification(true);
            }
            setUser(doc.data().type);
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
    }
  }, [userObj]);

  useEffect(() => {
    if (user === 'employer') {
      firestore
        .collection('chats')
        .orderBy('updated_at', 'desc')
        .where('employer_uid', '==', userObj?.uid)
        .onSnapshot((snapshot) => {
          const list = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setChatRoomList(list);
        });
      setIsLoading(false);
    }
  }, [user]);

  const onLeftClick = () => {
    history.goBack();
  };
  return (
    <>
      <ChatNavigation
        leftIcon="back"
        rightIcon="more"
        onLeftIconClick={onLeftClick}
      >
        메신저
      </ChatNavigation>
      <Container top={63}>
        <Search top={20} />
        {isLoading && <Spinner />}
        {chatRoomList.map((chat) =>
          classification ? (
            <ChatRoom classification={classification} userObj={chat} />
          ) : (
            <ChatRoom classification={classification} userObj={chat} />
          ),
        )}
      </Container>
    </>
  );
};
export default ChatList;
