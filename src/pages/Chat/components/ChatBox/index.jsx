import { useState, useCallback } from 'react';
import { firestore } from 'misc/firebase';
import PropTypes from 'prop-types';
import MessageTypeBox from './style';

const ChatBox = ({ chatsDoc, user, chatRef }) => {
  const [message, setMessage] = useState('');
  const onChangeMessage = (e) => {
    const {
      target: { value },
    } = e;
    setMessage(value);
  };

  const onSubmit = async (e) => {
    console.log('submit');
    e.preventDefault();
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
    chatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
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
    />
  );
};

ChatBox.propTypes = {
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  chatsDoc: PropTypes.arrayOf(PropTypes.object).isRequired,
  chatRef: PropTypes.func.isRequired,
};

export default ChatBox;
