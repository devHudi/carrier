import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: #eeefff 0% 0% no-repeat padding-box;
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MsgerChat = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
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
const LeftContinueBubble = styled(LeftMsgBubble)`
  border-radius: 15px;
  margin-left: 50px;
`;
const RightContinueBubble = styled(LeftMsgBubble)`
  border-radius: 15px;
  margin-right: 50px;
`;
export const OpponentContent = ({ children, profileImg, flag }) => (
  <LeftMsg>
    {flag ? (
      <>
        <MsgImg src={profileImg} />
        <LeftMsgBubble>{children}</LeftMsgBubble>
      </>
    ) : (
      <>
        <LeftContinueBubble>{children}</LeftContinueBubble>
      </>
    )}
  </LeftMsg>
);

export const MyContent = ({ children, profileImg, flag }) => (
  <RightMsg>
    {flag ? (
      <>
        <RightMsgImg src={profileImg} />
        <RightMsgBubble>{children}</RightMsgBubble>
      </>
    ) : (
      <>
        <RightContinueBubble>{children}</RightContinueBubble>
      </>
    )}
  </RightMsg>
);

OpponentContent.propTypes = {
  children: PropTypes.element,
  profileImg: PropTypes.string,
  flag: PropTypes.bool,
};

OpponentContent.defaultProps = {
  children: <></>,
  profileImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJ2w0tusqwSVts97rg_faGOO169vG9gUF0Q&usqp=CAU',
  flag: true,
};
MyContent.propTypes = {
  children: PropTypes.element,
  profileImg: PropTypes.string,
  flag: PropTypes.bool,
};

MyContent.defaultProps = {
  children: <></>,
  profileImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJ2w0tusqwSVts97rg_faGOO169vG9gUF0Q&usqp=CAU',
  flag: true,
};
