import styled from 'styled-components';
import PropTypes from 'prop-types';
import paper from './assets/paperplane.png';
import plus from './assets/plus.png';
import line from './assets/line.png';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 99px;
  background-color: ${(props) => props.theme.colors.white};
`;
const TextWrapper = styled.div`
  width: 100%;
  height: 55px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 35px;
  width: 71%;
  bottom: 14px;
  padding: 14px 20px 14px 15px;
  border-radius: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeefff;
`;

const MessageInput = styled.textarea`
  text-align: left;
  border-style: none;
  margin-right: 0px;
  width: 90%;
  resize: none;
  font-size: 16px;
  background: none;
  border: none;
`;
const SubmitButton = styled.button`
  z-index: 1;
  border: none;
  outline: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  & > img {
    width: 19px;
    height: 19px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
const Plus = styled.img`
  width: 19px;
  height: 19px;
  cursor: pointer;
`;
const ConfirmDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
`;
const Confirm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: lighter;
  &:hover {
    box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.1);
  }
`;
const Line = styled.img`
  height: 20px;
`;

const MessageTypeBox = ({ onChange, onSubmit, value, onKeydownChat }) => {
  const placeholder = '메세지를 입력하세요.';
  return (
    <>
      <Div>
        <ConfirmDiv>
          <Confirm>약속 확정하기</Confirm>
          <Line src={line} />
          <Confirm>후기 작성하기</Confirm>
        </ConfirmDiv>
        <TextWrapper>
          <Form onSubmit={onSubmit}>
            <Plus src={plus} />
            <Wrapper>
              <MessageInput
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onKeyPress={onKeydownChat}
                cols="33"
                rows="1"
              />
            </Wrapper>
            <SubmitButton type="submit" value="전송">
              <img src={paper} />
            </SubmitButton>
          </Form>
        </TextWrapper>
      </Div>
    </>
  );
};
MessageTypeBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onKeydownChat: PropTypes.func.isRequired,
};

export default MessageTypeBox;
