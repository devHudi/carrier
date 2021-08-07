import { useLocation, useHistory } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Spinner } from 'carrier-ui';
import ChatNavBar from './components/ChatNav/style';
import { firestore, auth } from '../../misc/firebase';
import {
  MyContent,
  Wrapper,
  OpponentContent,
  MsgerChat,
} from './components/ChatBubble/styles';
import ChatBox from './components/ChatBox';

const Chat = () => {
  const location = useLocation();
  const { userObj } = location?.state;
  const [conversation, setconversation] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(async () => {
    firestore
      .collection('chats')
      .doc(userObj.id)
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
        <ChatBox chatsDoc={userObj} user={user} chatRef={chatRef} />
      </Wrapper>
    </>
  );
};

export default Chat;
