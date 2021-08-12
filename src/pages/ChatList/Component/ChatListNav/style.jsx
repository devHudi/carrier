import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { MdChat } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowBack, IoIosMore } from 'react-icons/io';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  padding: 23px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

const createIcon = (history, type, onClick) => {
  if (type === 'chat') {
    return <MdChat onClick={onClick} />;
  }
  if (type === 'mypage') {
    return <IoPersonSharp onClick={onClick} />;
  }
  if (type === 'home') {
    return <AiFillHome onClick={onClick} />;
  }
  if (type === 'back') {
    return <IoIosArrowBack onClick={onClick} />;
  }
  if (type === 'more') {
    return <IoIosMore onClick={onClick} />;
  }
  return null;
};

const ChatNavigation = ({
  leftIcon,
  // rightIcon,
  onLeftIconClick,
  // onRightIconClick,
  children,
}) => {
  const history = useHistory();
  console.log('chatNav');
  return (
    <Wrapper>
      <Icon>{createIcon(history, leftIcon, onLeftIconClick)}</Icon>
      {children}
      <div />
    </Wrapper>
  );
};

ChatNavigation.propTypes = {
  leftIcon: PropTypes.oneOf(['chat', 'mypage', 'home', 'back', 'more']),
  // rightIcon: PropTypes.oneOf(['chat', 'mypage', 'home', 'back', 'more']),
  onLeftIconClick: PropTypes.func,
  // onRightIconClick: PropTypes.func,
  children: PropTypes.element,
};

ChatNavigation.defaultProps = {
  leftIcon: 'chat',
  // rightIcon: 'mypage',
  onLeftIconClick: () => {},
  // onRightIconClick: () => {},
  children: <></>,
};

export default ChatNavigation;
