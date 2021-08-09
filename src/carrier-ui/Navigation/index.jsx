import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { MdChat } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

const Wrapper = styled.div`
  width: 100%;
  position: ${(props) => props.position};
  top: 0;
  padding: 37px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: ${(props) => props.iconColor};
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
  return null;
};

const Navigation = ({
  leftIcon,
  rightIcon,
  onLeftIconClick,
  onRightIconClick,
  position,
  iconColor,
  children,
}) => {
  const history = useHistory();

  return (
    <Wrapper position={position}>
      {leftIcon && (
        <Icon iconColor={iconColor}>
          {createIcon(history, leftIcon, onLeftIconClick)}
        </Icon>
      )}
      {children}
      {rightIcon && (
        <Icon iconColor={iconColor}>
          {createIcon(history, rightIcon, onRightIconClick)}
        </Icon>
      )}
    </Wrapper>
  );
};

Navigation.propTypes = {
  leftIcon: PropTypes.oneOf(['chat', 'mypage', 'home', 'back']),
  rightIcon: PropTypes.oneOf(['chat', 'mypage', 'home', 'back']),
  onLeftIconClick: PropTypes.func,
  onRightIconClick: PropTypes.func,
  position: PropTypes.string,
  iconColor: PropTypes.string,
  children: PropTypes.element,
};

Navigation.defaultProps = {
  leftIcon: 'chat',
  rightIcon: 'mypage',
  onLeftIconClick: () => {},
  onRightIconClick: () => {},
  position: 'fixed',
  iconColor: '#ffffff',
  children: <></>,
};

export default Navigation;
