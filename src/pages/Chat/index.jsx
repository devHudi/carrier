import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Spinner } from 'carrier-ui';
import ChatNavBar from './components/ChatNav/style';
import { firestore, auth } from '../../misc/firebase';
import {
  MyContent,
  Wrapper,
  OpponentContent,
  MsgerChat,
  InfoWrapper,
} from './components/ChatBubble/styles';
import ChatBox from './components/ChatBox';
import UserInfoModal from './components/Modal/LargeInfo';

const Chat = () => {
  const [userObj, setUserObj] = useState([]);
  const [conversation, setconversation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = auth.currentUser;
  const { uid } = useParams();

  useEffect(() => {
    firestore
      .collection('chats')
      .doc(uid)
      .get()
      .then((doc) => {
        setUserObj({
          id: uid,
          created_at: doc.data().created_at,
          employee_name: doc.data().employee_name,
          employee_profile_img: doc.data().employee_profile_img,
          employee_uid: doc.data().employee_uid,
          employer_name: doc.data().employer_name,
          employer_profile_img: doc.data().employer_profile_img,
          employer_uid: doc.data().employer_uid,
        });
      });
  }, [uid]);

  useEffect(async () => {
    firestore
      .collection('chats')
      .doc(uid)
      .collection('conversation')
      .orderBy('sended_at')
      .onSnapshot((snapshot) => {
        setconversation(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
          })),
        );
      });
    setIsLoading(false);
  }, []);
  const history = useHistory();
  const onLeftClick = () => {
    history.goBack();
  };
  const chatRef = useRef();
  return (
    <>
      <ChatNavBar
        leftIcon="back"
        rightIcon="more"
        onLeftIconClick={onLeftClick}
      >
        {user?.uid === userObj?.employee_uid
          ? userObj?.employer_name
          : userObj?.employee_name}
      </ChatNavBar>
      <Wrapper>
        <InfoWrapper>
          <UserInfoModal />
        </InfoWrapper>
        <MsgerChat>
          {isLoading && <Spinner />}
          {conversation.map((chat) =>
            chat?.sender_uid === user?.uid ? (
              <MyContent
                key={chat.sended_at}
                profileImg={
                  user?.uid === userObj?.employee_uid
                    ? userObj?.employee_profile_img
                    : userObj?.employer_profile_img
                }
              >
                {chat.content}
              </MyContent>
            ) : (
              <OpponentContent
                key={chat.sended_at}
                profileImg={
                  user?.uid === userObj?.employee_uid
                    ? userObj?.employer_profile_img
                    : userObj?.employee_profile_img
                }
              >
                {chat.content}
              </OpponentContent>
            ),
          )}
          <div ref={chatRef} />
        </MsgerChat>
        <InfoWrapper>
          <ChatBox chatsDoc={userObj} user={user} chatRef={chatRef} />
        </InfoWrapper>
      </Wrapper>
    </>
  );
};

export default Chat;
