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
  const count = 2;
  const history = useHistory();
  const click = () => {
    history.push(`/chat/${userObj.id}`);
  };
  let today;
  const date = new Date(userObj.updated_at).getDate();
  const Month = new Date(userObj.updated_at).getMonth();
  let Hours = new Date(userObj.updated_at).getHours();
  const Minutes = new Date(userObj.updated_at).getMinutes();

  if (Date.now().getMonth === Month && Date.now().getDate() === date) {
    if (Hours > 12) {
      Hours -= 12;
      today = `오후 ${Hours}시 ${Minutes}분`;
    } else {
      today = `오전 ${Hours}시 ${Minutes}분`;
    }
  } else {
    today = `${Month}월 ${date}일`;
  }

  console.log(today);
  return (
    <>
      {classification ? (
        <Wrapper onClick={click}>
          <MessageBox>
            <Img src={userObj?.employer_profile_img} alt="" />
            <span>{userObj?.employer_name}</span>
            <span>안녕하세요 소비자 입니다~~~</span>
          </MessageBox>
          <RecentBox>
            <span>{userObj?.updated_at}</span>
            <div>{count}</div>
          </RecentBox>
        </Wrapper>
      ) : (
        <Wrapper onClick={click}>
          <Img src={userObj?.employee_profile_img} alt="" />
          <MessageBox>
            <span>{userObj?.employee_name}</span>
            <span>안녕하세요 가이드 입니다~~~</span>
          </MessageBox>
          <RecentBox>
            <DateDiv>{today}</DateDiv>
            <CountDiv>{count}</CountDiv>
          </RecentBox>
        </Wrapper>
      )}
    </>
  );
};

ChatRoom.propTypes = {
  userObj: PropTypes.arrayOf(PropTypes.object).isRequired,
  classification: PropTypes.bool.isRequired,
};
export default ChatRoom;
