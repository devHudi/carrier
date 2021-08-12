import { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoPaperPlaneSharp } from 'react-icons/io5';
import toast from 'react-simple-toasts';

const Div = styled.div`
  z-index: 255;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 6px 6px 7px rgb(0 0 0 / 0.3);
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-name: ${(props) => {
    const test = props.onClickPlus;
    if (test === true) {
      return 'slideup';
    }
    return 'slidedown';
  }};

  @keyframes slideup {
    from {
      height: 99px;
      padding-bottom: 0px;
    }

    to {
      height: 255px;
      padding-bottom: 200px;
    }
  }

  @keyframes slidedown {
    from {
      height: 255px;
      padding-bottom: 200px;
    }

    to {
      height: 99px;
      padding-bottom: 0px;
    }
  }
`;
const TextWrapper = styled.div`
  width: 100%;
  height: 55px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
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
  width: 100%;
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
  transform: rotate(45deg);
  &:hover {
    opacity: 0.8;
  }
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-name: ${(props) => {
    const test = props.isMessage;
    if (test === true) {
      return 'slidein';
    }
    return 'slideout';
  }};

  @keyframes slidein {
    from {
      color: #cccccc;
    }

    to {
      color: ${(props) => props.theme.colors.blue};
    }
  }

  @keyframes slideout {
    from {
      color: ${(props) => props.theme.colors.blue};
    }

    to {
      color: #cccccc;
    }
  }
`;

const MessageTypeBox = ({
  onChange,
  onSubmit,
  value,
  onKeydownChat,
  isMessage,
  onClickPlus,
}) => {
  useEffect(() => {
    toast('당신은 가이드입니다! 채팅을 보낼 때 조심해주세요!');
  }, []);

  const placeholder = '현재 당신은 가이드입니다';
  return (
    <Div onClickPlus={onClickPlus}>
      <TextWrapper>
        <Form onSubmit={onSubmit}>
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
          <SubmitButton type="submit" value="전송" isMessage={isMessage}>
            <IoPaperPlaneSharp size={21} />
          </SubmitButton>
        </Form>
      </TextWrapper>
    </Div>
  );
};
MessageTypeBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onKeydownChat: PropTypes.func.isRequired,
  isMessage: PropTypes.bool.isRequired,
  onClickPlus: PropTypes.bool.isRequired,
};

export default MessageTypeBox;
