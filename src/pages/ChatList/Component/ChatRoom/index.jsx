import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Img, MessageBox, RecentBox, Wrapper } from './style';

const ChatRoom = ({ userObj, classification }) => {
  const count = 2;
  const history = useHistory();
  const click = () => {
    history.push({
      pathname: `/chat/${userObj?.id}`,
    });
  };
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
            <span>{userObj?.updated_at}</span>
            <span>{count}</span>
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