import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Spinner } from 'carrier-ui';
import { auth, firestore } from '../../misc/firebase';
import ChatNavigation from './Component/ChatListNav/style';
import Search from './Component/SearchBar/search';
import ChatRoom from './Component/ChatRoom';

const ChatList = () => {
  const [chatRoomList, setChatRoomList] = useState([]);
  const [classification, setClassification] = useState(false); // false 는 소비자
  const [user, setUser] = useState('');
  const [userObj, setUserObj] = useState(null);
  const [searchWord, setSearchWord] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  //* *********************로그인한 사용자로부터 유저 데이터 가져오는 곳************************//

  useEffect(async () => {
    await auth.signInWithEmailAndPassword('dlwnsgus07@naver.com', 'rdwg6867');
    setUserObj(auth.currentUser);
  }, []);
  useEffect(() => {
    if (userObj) {
      firestore
        .collection('users')
        .where('uid', '==', userObj?.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data.type === 'employee') {
              setClassification(true);
            }
            setUser(doc.data().type);
          });
        });
    }
  }, [userObj]);
  //* ***********************************************************************************//
  // 밑에 useEffect 코드 리펙토링 할때 적은 코드로 사용할 수 있게 하기. + collection name chat->chats로 변경하기
  useEffect(async () => {
    if (user === 'employer') {
      firestore
        .collection('chats')
        .where('employer_uid', '==', userObj?.uid)
        .onSnapshot((snapshot) => {
          setChatRoomList(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })),
          );
        });
      setIsLoading(false);
    } else if (user === 'employee') {
      firestore
        .collection('chats')
        .where('employee_uid', '==', userObj?.uid)
        .onSnapshot((snapshot) => {
          setChatRoomList(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              uid: doc.data().employee_uid,
            })),
          );
        });
      setIsLoading(false);
    }
  }, [user]);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setSearchWord(value);
  };
  const onSubmit = () => {
    setSearchWord('');
  };
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
        <Search
          top={20}
          onChangeWord={onChange}
          value={searchWord}
          onSubmit={onSubmit}
        />
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
