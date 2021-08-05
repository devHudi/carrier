import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { firestore } from '../../misc/firebase';

const Chat = () => {
  const location = useLocation();
  const { userObj } = location.state;
  const { classification } = location.state;
  const [conversation, setconversation] = useState([]);
  useEffect(() => {
    firestore
      .collection('chat')
      .doc(userObj.id)
      .collection('conversation')
      .onSnapshot((snapshot) => {
        setconversation(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
          })),
        );
      });
  });
  return (
    <span>
      {conversation.map((chat) =>
        classification ? <div>{chat.content}</div> : <div>{chat.content}</div>,
      )}
    </span>
  );
};

export default Chat;
