import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Spinner } from 'carrier-ui';
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

  auth.onAuthStateChanged((u) => {
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
            console.log(user);
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error);
        });
      console.log(user);
    }
  }, [userObj]);

  useEffect(() => {
    if (user === 'employer') {
      // const chats = [];
      firestore
        .collection('chats')
        .orderBy('updated_at')
        .where('employer_uid', '==', userObj?.uid)
        .onSnapshot((snapshot) => {
          const list = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setChatRoomList(list);
        });
      console.log('setchat');
      setIsLoading(false);
    } else if (user === 'employee') {
      firestore
        .collection('chats')
        .orderBy('updated_at')
        .where('employee_uid', '==', userObj?.uid)
        .onSnapshot((snapshot) => {
          const list = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setChatRoomList(list);
        });
      console.log('setchat');
      setIsLoading(false);
    }
  }, [user]);
  const history = useHistory();
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
