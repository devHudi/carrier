import { useState } from 'react';
import { firestore } from 'misc/firebase';
import PropTypes from 'prop-types';
import MessageTypeBox from './style';

const ChatBox = ({ chatsDoc, user }) => {
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
        sended_at: Date.now(),
        sender_uid: user?.uid,
      });
    setMessage('');
  };
  return (
    <MessageTypeBox
      onChange={onChangeMessage}
      value={message}
      onSubmit={onSubmit}
    />
  );
};

ChatBox.propTypes = {
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  chatsDoc: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatBox;
