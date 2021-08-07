import PropTypes from 'prop-types';
import { Img, MessageBox, RecentBox, Wrapper, StyledLink } from './style';

const ChatRoom = ({ userObj, classification }) => {
  const count = 2;
  return (
    <>
      {classification ? (
        <StyledLink
          to={{
            pathname: `/chat/${userObj?.id}`,
            state: {
              userObj,
              classification,
            },
          }}
        >
          <Wrapper>
            <Img src={userObj?.employer_profile_img} alt="" />
            <MessageBox>
              <span>{userObj?.employer_name}</span>
              <span>안녕하세요 소비자 입니다~~~</span>
            </MessageBox>
            <RecentBox>
              <span>{userObj?.updated_at}</span>
              <div>{count}</div>
            </RecentBox>
          </Wrapper>
        </StyledLink>
      ) : (
        <StyledLink
          to={{
            pathname: `/chat/${userObj?.id}`,
            state: {
              userObj,
              classification,
            },
          }}
        >
          <Wrapper>
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
        </StyledLink>
      )}
    </>
  );
};

ChatRoom.propTypes = {
  userObj: PropTypes.arrayOf(PropTypes.object).isRequired,
  classification: PropTypes.bool.isRequired,
};
export default ChatRoom;
