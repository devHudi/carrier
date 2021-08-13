import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/all';

const Wrapper = styled.div`
  top: ${(props) => (props.top ? `${props.top}px` : 'initial')};
  width: 100%;
  height: 48px;
  padding: 14px 20px 14px 15px;
  border: 2px solid #ffffff;
  border-radius: 48px;
  box-shadow: 3px 3px 7px rgb(0 0 0 / 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  &:first-child {
    transform: rotate(90deg);
  }
`;

const Input = styled.input`
  text-align: left;
  border-style: none;
  width: 100%;
  font-size: 19px;
  &::placeholder {
    font-family: NanumSquare sans-serif;
    font-weight: normal;
    font-size: 19px;
    line-height: 40px;
    letter-spacing: 0px;
    color: ${(props) => props.theme.colors.blue};
  }
`;
const Search = ({ top, value, onChange, onSubmit, placeHolder }) => (
  <Wrapper top={top} onSubmit={onSubmit}>
    <Input value={value} onChange={onChange} placeholder={placeHolder} />
    <Icon>
      <AiOutlineSearch onClick={onSubmit} />
    </Icon>
  </Wrapper>
);

Search.propTypes = {
  top: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
};
Search.defaultProps = {
  top: 0,
  placeHolder: '검색',
};
export default Search;
