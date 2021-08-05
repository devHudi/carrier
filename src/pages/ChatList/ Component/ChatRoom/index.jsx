/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Img, MessageBox, RecentBox, Wrapper } from './style';

const ChatRoom = ({ userObj, classification }) => {
  const count = 2;
  console.log(classification);
  return (
    <>
      {classification ? (
        <Link
          to={{
            pathname: `/chat/${userObj.id}`,
            state: {
              userObj,
              classification,
            },
          }}
        >
          <Wrapper>
            <Img src="" alt="" />
            <MessageBox>
              <span>{userObj.employer_name}</span>
              <span>안녕하세요 소비자 입니다~~~</span>
            </MessageBox>
            <RecentBox>
              <span>{userObj.updated_at}</span>
              <div>{count}</div>
            </RecentBox>
          </Wrapper>
        </Link>
      ) : (
        <Link
          to={{
            pathname: `/chat/${userObj.id}`,
            state: {
              userObj,
              classification,
            },
          }}
        >
          <Wrapper>
            <Img src="" alt="" />
            <MessageBox>
              <span>{userObj.employee_name}</span>
              <span>안녕하세요 가이드 입니다~~~</span>
            </MessageBox>
            <RecentBox>
              <span>{userObj.updated_at}</span>
              <span>{count}</span>
            </RecentBox>
          </Wrapper>
        </Link>
      )}
    </>
  );
};

ChatRoom.propTypes = {
  userObj: PropTypes.arrayOf('any').isRequired,
  classification: PropTypes.bool.isRequired,
};
export default ChatRoom;
// import PropTypes from 'prop-types';
//
// const ChatRoom = ({ userObj, classification }) => {
//   const [recentConversation, setRecentConversation] = useState('');
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       classification?(
//       <div>
//         <img src={userObj.employer_profile_img} alt="" />
//         <div>
//           <span>{userObj.employer_name}</span>
//           <span>{recentConversation}</span>
//         </div>
//         <div>
//           <span>{userObj.updated_at}</span>
//           <div>{count}</div>
//         </div>
//       </div>
//       ):(
//       <div>
//         <img src={userObj.employee_profile_img} alt="" />
//         <div>
//           <span>{userObj.employee_name}</span>
//           <span>{recentConversation}</span>
//         </div>
//         <div>
//           <span>{userObj.updated_at}</span>
//           <div>{count}</div>
//         </div>
//       </div>
//       )
//     </>
//   );
// };
// ChatRoom.propTypes = {
//   userObj: PropTypes.arrayOf('any').isRequired,
//   classification: PropTypes.bool.isRequired,
// };
// export default ChatRoom;
