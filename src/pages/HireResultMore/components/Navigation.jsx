import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { Typography, Margin } from 'carrier-ui';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 37px 24px;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

const Navigation = ({ leftIcon, onLeftIconClick, title }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <Icon>{createIcon(history, leftIcon, onLeftIconClick)}</Icon>
      {title && (
        <>
          <Margin size={30} />
          <TitleContainer>
            <Typography title>{title}</Typography>
            <Typography subhead style={{ fontWeight: 'bold' }}>
              추천순 <IoIosArrowDown />
            </Typography>
          </TitleContainer>
        </>
      )}
    </Wrapper>
  );
};

Navigation.propTypes = {
  leftIcon: PropTypes.oneOf(['chat', 'mypage', 'home', 'back']),
  onLeftIconClick: PropTypes.func,
  title: PropTypes.string,
};

Navigation.defaultProps = {
  leftIcon: 'back',
  onLeftIconClick: () => {},
  title: '',
};

export default Navigation;
