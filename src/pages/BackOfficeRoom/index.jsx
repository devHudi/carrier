import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Spinner, Navigation } from 'carrier-ui';
import UserInfoModal from 'pages/Chat/components/Modal/LargeInfo';
import { firestore, auth } from '../../misc/firebase';
import {
  MyContent,
  Wrapper,
  OpponentContent,
  MsgerChat,
  InfoWrapper,
} from './components/ChatBubble/styles';
import ChatBox from './components/ChatBox';

const Chat = () => {
  const history = useHistory();
  const [userObj, setUserObj] = useState();
  const [currentUserObj, setCurrentUserObj] = useState();
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { uid } = useParams();

  useEffect(() => {
    firestore
      .collection('chats')
      .doc(uid)
      .onSnapshot((doc) => {
        setUserObj(doc.data());
      });
    setIsLoading(false);
  }, [uid]);

  useEffect(async () => {
    await firestore.collection('chats').doc(uid).update({
      isNewMessage: false,
    });
  }, []);

  auth.onAuthStateChanged((u) => {
    setCurrentUserObj(u);
  });

  useEffect(async () => {
    if (currentUserObj) {
      await firestore
        .collection('users')
        .doc(currentUserObj?.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data());
          } else {
            history.push('/');
          }
        })
        .catch(() => {
          history.push('/');
        });
    }
  }, [currentUserObj]);

  useEffect(() => {
    if (user && !user?.admin) history.push('/');
  }, [user]);

  const chatRef = useRef();

  return (
    <>
      <Navigation
        leftIcon="back"
        rightIcon="home"
        onLeftIconClick={() => history.goBack()}
        onRightIconClick={() => history.push('/')}
        iconColor="#000000"
      >
        {userObj?.employee_name} → {userObj?.employer_name}
      </Navigation>
      <Wrapper>
        <InfoWrapper>
          <UserInfoModal userUid={userObj?.employer_uid} />
        </InfoWrapper>
        <MsgerChat>
          {isLoading && <Spinner />}
          {userObj?.conversations?.map((chat) =>
            chat?.sender_uid === userObj?.employer_uid ? (
              <OpponentContent
                key={chat.sended_at}
                profileImg={userObj?.employer_profile_img}
              >
                {chat.content}
              </OpponentContent>
            ) : (
              <MyContent
                key={chat.sended_at}
                profileImg={userObj?.employee_profile_img}
              >
                {chat.content}
              </MyContent>
            ),
          )}
          <div ref={chatRef} />
        </MsgerChat>
        <ChatBox
          chatsDoc={userObj}
          user={user}
          chatRef={chatRef}
          conversations={userObj?.conversations}
        />
      </Wrapper>
    </>
  );
};

export default Chat;
