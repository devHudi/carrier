import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { MdChat } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 25px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

const Navigation = ({ children }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <Icon>
        <MdChat onClick={() => history.push('/chat')} />
      </Icon>
      {children}
      <Icon>
        <IoPersonSharp onClick={() => history.push('/login')} />
      </Icon>
    </Wrapper>
  );
};

Navigation.propTypes = {
  children: PropTypes.element,
};

Navigation.defaultProps = {
  children: <></>,
};

export default Navigation;
