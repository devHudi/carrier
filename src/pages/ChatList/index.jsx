/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../misc/firebase';
import Container from '../../carrier-ui/Container';
import Navigation from './ Component/ChatListNav/style';
import Search from './ Component/SearchBar/search';
import ChatRoom from './ Component/ChatRoom';

const ChatList = () => {
  const [chatRoomList, setChatRoomList] = useState([]);
  const [classification, setClassification] = useState(false); // false 는 소비자
  const [user, setUser] = useState('');
  const [userObj, setUserObj] = useState(null);
  const [searchWord, setSearchWord] = useState('');
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
  useEffect(() => {
    if (user === 'employer') {
      firestore
        .collection('chat')
        .where('employer_uid', '==', userObj?.uid)
        .onSnapshot((snapshot) => {
          setChatRoomList(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })),
          );
        });
    } else if (user === 'employee') {
      firestore
        .collection('chat')
        .where('employee_uid', '==', userObj?.uid)
        .onSnapshot((snapshot) => {
          setChatRoomList(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              uid: doc.data().employee_uid,
            })),
          );
        });
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
  return (
    <>
      <Navigation leftIcon="back" rightIcon="more">
        메신저
      </Navigation>
      <Container top={63}>
        <Search
          top={20}
          onChangeWord={onChange}
          value={searchWord}
          onSubmit={onSubmit}
        />
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

// snapshot.forEach((doc) => {
//   chats.push(
//     dbService
//       .collection("chat")
//       .doc(doc.id)
//       .collection("conversation")
//   );
// });
// console.log(chatRoomList);
// chats.forEach((chat) => {
//   chat.onSnapshot((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });
//   });
// });

// dbService
//   .collection("chat")
//   .where("employee_uid", "==", userObj.uid)
//   .onSnapshot((snapshot) => {
//     let chatRoom = [];
//     snapshot.forEach((doc) => {
//       chatRoom.push(doc.get("employee_uid")); // 상대방 사용자 정보 가져오기
//       setChatRoomList(chatRoom);
//       chats.push(
//         dbService
//           .collection("chat")
//           .doc(doc.id)
//           .collection("conversation")
//       );
//     });
//     chats.forEach((chat) => {
//       chat.onSnapshot((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           // doc.data() is never undefined for query doc snapshots
//           console.log(doc.id, " => ", doc.data());
//         });
//       });
//     });
//   });

// chats[0].onSnapshot((snapshot) => {
//   setConversation(
//     snapshot.docs.map((chatDoc) => ({
//       ...chatDoc.data(),
//     }))
//   );
// });
// useEffect(async () => {
//   let chatCollection;
//   if (user === "employer") {
//     await dbService
//       .collection("chat")
//       .where("employer_uid", "==", userObj.uid)
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//           chatCollection = dbService
//             .collection("chat")
//             .doc(doc.id)
//             .collection("conversation");
//         });
//       });
//     chatCollection.onSnapshot((snapshot) => {
//       setConversation(
//         snapshot.docs.map((chatDoc) => ({
//           ...chatDoc.data(),
//         }))
//       );
//       // console.log(conversation);
//     });
//   } else {
//     dbService
//       .collection("chats")
//       .where("employee_uid", "==", userObj.uid)
//       .onSnapshot((snapshot) => {
//         setChatRoom(
//           snapshot.docs.map((chatDoc) => ({
//             id: chatDoc.id,
//             ...chatDoc.data(),
//           }))
//         );
//       });
//   }
// }, [user]);

// useEffect(() => {
//   chatRoomList.map((chat) => {
//     firestore
//       .collection('users')
//       .where('uid', '==', chat.employee_uid)
//       .get()
//       .then((querySnapshot) => {});
//   });
// }, [chatRoomList]);
