import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 225px;
  padding-bottom: 75px;
  height: 100vh;
  background: #eeefff 0% 0% no-repeat padding-box;
`;
export const MsgerChat = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #ddd;
  }
  &::-webkit-scrollbar-thumb {
    background: #bdbdbd;
  }
`;
const Msg = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;

  &:last-of-type {
    margin: 0;
  }
`;
const RightMsg = styled(Msg)`
  flex-direction: row-reverse;
`;

const LeftMsg = styled(Msg)`
  border-bottom-left-radius: 0;
`;

const MsgImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 1em;
  border-radius: 70%;
  background-position: center;
  background-size: cover;
  margin-bottom: 30px;
`;
const RightMsgImg = styled(MsgImg)`
  margin: 0 0 30px 10px;
`;

const MsgBubble = styled.div`
  max-width: 300px;
  padding: 15px;
  border-radius: 15px;
`;
const LeftMsgBubble = styled(MsgBubble)`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  box-shadow: 3px 3px 7px rgb(0 0 0 / 0.1);
  border-top-left-radius: 0;
`;
const RightMsgBubble = styled(MsgBubble)`
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-top-right-radius: 0;
  box-shadow: 3px 3px 7px rgb(0 0 0 / 0.1);
`;
export const OpponentContent = ({ children, profileImg }) => {
  const vlaue = '';
  return (
    <LeftMsg>
      <MsgImg src={profileImg} />
      <LeftMsgBubble>
        {children}
        {vlaue}
      </LeftMsgBubble>
    </LeftMsg>
  );
};
export const MyContent = ({ children, profileImg }) => {
  const vlaue = '';
  return (
    <RightMsg>
      <RightMsgImg src={profileImg} />
      <RightMsgBubble>
        {children}
        {vlaue}
      </RightMsgBubble>
    </RightMsg>
  );
};

OpponentContent.propTypes = {
  children: PropTypes.element,
  profileImg: PropTypes.string,
};

OpponentContent.defaultProps = {
  children: <></>,
  profileImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJ2w0tusqwSVts97rg_faGOO169vG9gUF0Q&usqp=CAU',
};
MyContent.propTypes = {
  children: PropTypes.element,
  profileImg: PropTypes.string,
};

MyContent.defaultProps = {
  children: <></>,
  profileImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJ2w0tusqwSVts97rg_faGOO169vG9gUF0Q&usqp=CAU',
};
