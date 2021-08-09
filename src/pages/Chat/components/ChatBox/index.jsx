import { useState, useCallback, useEffect } from 'react';
import { firestore } from 'misc/firebase';
import PropTypes from 'prop-types';
import MessageTypeBox from './style';

const ChatBox = ({ chatsDoc, user, chatRef }) => {
  const [message, setMessage] = useState('');
  const [isMessage, setIsMessage] = useState(false);
  const [onClickPlus, setOnClickPlus] = useState(false);
  const [requestButtonStatus, setRequestButtonStatus] = useState(false);

  useEffect(() => {
    setRequestButtonStatus(chatsDoc.transaction_completed);
  }, [chatsDoc.transaction_completed]);
  const onChangeMessage = (e) => {
    const {
      target: { value },
    } = e;
    setMessage(value);
    if (value !== '') {
      setIsMessage(true);
    } else {
      setIsMessage(false);
    }
  };
  const onToggle = () => setOnClickPlus((prev) => !prev);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (isMessage) {
      await firestore
        .collection('chats')
        .doc(chatsDoc?.id)
        .collection('conversation')
        .add({
          content: message,
          sended_at: new Date(Date.now()),
          sender_uid: user?.uid,
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
  user: PropTypes.array.isRequired,
  chatsDoc: PropTypes.array.isRequired,
  chatRef: PropTypes.func.isRequired,
};

export default ChatBox;
