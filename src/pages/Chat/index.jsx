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
  const [userObj, setUserObj] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const user = auth.currentUser;
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
  const history = useHistory();
  const onLeftClick = () => {
    history.goBack();
  };
  const chatRef = useRef();
  useEffect(async () => {
    await firestore.collection('chats').doc(uid).update({
      isNewMessage: false,
    });
  }, []);
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
          <UserInfoModal userUid={userObj?.employer_uid} />
        </InfoWrapper>
        <MsgerChat>
          {isLoading && <Spinner />}
          {userObj?.conversations?.map((chat) =>
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
