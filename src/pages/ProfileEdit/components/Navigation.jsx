import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';

const Wrapper = styled.div`
  width: 100%;
  top: 0;
  padding: 24px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
`;

const createIcon = (history, type, onClick) => {
  if (type === 'back') {
    return <IoIosArrowBack onClick={onClick} />;
  }

  return null;
};

const Navigation = ({ leftIcon, onLeftIconClick }) => {
  const history = useHistory();
  console.log('여개는 내비');
  return (
    <Wrapper>
      <Icon>{createIcon(history, leftIcon, onLeftIconClick)}</Icon>
    </Wrapper>
  );
};

Navigation.propTypes = {
  leftIcon: PropTypes.oneOf(['chat', 'mypage', 'home', 'back']),
  onLeftIconClick: PropTypes.func,
};

Navigation.defaultProps = {
  leftIcon: 'back',
  onLeftIconClick: () => {},
};

export default Navigation;
