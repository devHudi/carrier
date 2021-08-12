import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Img,
  MessageBox,
  RecentBox,
  Wrapper,
  DateDiv,
  CountDiv,
} from './style';

const ChatRoom = ({ userObj, classification }) => {
  const history = useHistory();
  const click = () => {
    history.push(`/chat/${userObj.id}`);
  };
  let today;
  const Today = new Date(userObj?.updated_at?.toDate());
  const now = new Date(Date.now());
  const date = Today.getDate();
  const Month = Today.getMonth() + 1;
  let Hours = Today.getHours();
  const Minutes = Today.getMinutes();

  if (now.getMonth() + 1 === Month && now.getDate() === date) {
    if (Hours > 12) {
      Hours -= 12;
      today = `오후 ${Hours}시 ${Minutes}분`;
    } else {
      today = `오전 ${Hours}시 ${Minutes}분`;
    }
  } else {
    today = `${Month}월 ${date}일`;
  }

  return (
    <>
      {classification ? (
        <Wrapper onClick={click}>
          <MessageBox>
            <Img src={userObj?.employer_profile_img} alt="" />
            <span>{userObj?.employer_name}</span>
            {userObj?.isNewMessage ? (
              <span>새로운 메세지가 도착했습니다.</span>
            ) : (
              <span>이미 읽은 메세지 입니다.</span>
            )}
          </MessageBox>
          <DateDiv>{today}</DateDiv>
          <CountDiv>{userObj?.isNewMessage && <div>!</div>}</CountDiv>
        </Wrapper>
      ) : (
        <Wrapper onClick={click}>
          <Img src={userObj?.employee_profile_img} alt="" />
          <MessageBox>
            <span>{userObj?.employee_name}</span>
            {userObj?.isNewMessage ? (
              <span>새로운 메세지가 도착했습니다.</span>
            ) : (
              <span>이미 읽은 메세지 입니다.</span>
            )}
          </MessageBox>
          <RecentBox>
            <DateDiv>{today}</DateDiv>
            {userObj?.isNewMessage && <CountDiv>!</CountDiv>}
          </RecentBox>
        </Wrapper>
      )}
    </>
  );
};

ChatRoom.propTypes = {
  userObj: PropTypes.array.isRequired,
  classification: PropTypes.bool.isRequired,
};
export default ChatRoom;
