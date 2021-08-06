import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as PaperPlane } from '../../assets/paper.svg';

const Wrapper = styled.form`
  height: 48px;
  width: 90%;
  position: absolute;
  bottom: 27px;
  padding: 14px 20px 14px 15px;
  border: 2px solid #ffffff;
  border-radius: 48px;
  box-shadow: 3px 3px 7px rgb(0 0 0 / 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

const MessageInput = styled.textarea`
  text-align: left;
  border-style: none;
  margin-right: 20px;
  width: 80%;
  resize: none;
  font-size: 16px;
  spellcheck="false"
  background: none;
  border: none;
  outline: none!important;
  resize: none; 
  word-break:break-all;
  wrap="VIRTUAL"
  &::placeholder{
    opacity: 0.7;
  }

`;
const SubmitButton = styled.button`
  position: absolute;
  z-index: 1;
  right: 15px;
  border: none;
  width: 40px;
  height: 40px;
  outline: none !important;
  cursor: pointer;
  backgorund: none;
  &:hover {
    opacity: 0.8;
  }
`;

const MessageTypeBox = ({ onChange, onSubmit, value }) => {
  const placeholder = '메세지를 입력하세요.';
  return (
    <>
      <Wrapper onSubmit={onSubmit}>
        <MessageInput
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          cols="33"
          rows="1"
        />
        <SubmitButton type="submit" value="전송">
          <img src={PaperPlane} />
        </SubmitButton>
      </Wrapper>
    </>
  );
};
MessageTypeBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MessageTypeBox;
