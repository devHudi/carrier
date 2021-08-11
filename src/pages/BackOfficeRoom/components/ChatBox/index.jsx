import { useState, useCallback, useEffect } from 'react';
import { firestore } from 'misc/firebase';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import MessageTypeBox from './style';

const ChatBox = ({ conversations, chatsDoc, chatRef }) => {
  const [message, setMessage] = useState('');
  const [isMessage, setIsMessage] = useState(false);
  const [onClickPlus, setOnClickPlus] = useState(false);
  const [requestButtonStatus, setRequestButtonStatus] = useState(false);
  const { uid } = useParams();
  useEffect(() => {
    setRequestButtonStatus(chatsDoc?.transaction_completed);
  }, [chatsDoc?.transaction_completed]);
  const onChangeMessage = useCallback((e) => {
    const {
      target: { value },
    } = e;
    setMessage(value);
    if (value !== '') {
      setIsMessage(true);
    } else {
      setIsMessage(false);
    }
  }, []);
  const onToggle = () => setOnClickPlus((prev) => !prev);
  const onSubmit = async (e) => {
    const conversation = conversations;
    conversation?.push({
      content: message,
      sended_at: new Date(Date.now()),
      sender_uid: chatsDoc.employee_uid,
    });
    e.preventDefault();
    if (isMessage) {
      await firestore
        .collection('chats')
        .doc(uid)
        .update({
          conversations: conversation,
          isNewMessage: true,
          updated_at: new Date(Date.now()),
        });
      setMessage('');
      setIsMessage(false);
      chatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const onKeydownChat = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (!e.shiftKey) {
          e.preventDefault();
          onSubmit(e);
        }
      }
    },
    [onSubmit],
  );

  return (
    <MessageTypeBox
      onChange={onChangeMessage}
      value={message}
      onSubmit={onSubmit}
      onKeydownChat={onKeydownChat}
      chatRef={chatRef}
      isMessage={isMessage}
      onToggle={onToggle}
      onClickPlus={onClickPlus}
      requestButtonStatus={requestButtonStatus}
    />
  );
};

ChatBox.propTypes = {
  chatsDoc: PropTypes.array.isRequired,
  chatRef: PropTypes.func.isRequired,
  conversations: PropTypes.array.isRequired,
};

export default ChatBox;
