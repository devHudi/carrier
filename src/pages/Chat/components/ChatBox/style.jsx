import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoPaperPlaneSharp } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import toast from 'react-simple-toasts';
import { useHistory } from 'react-router-dom';
import line from './assets/line.png';
import camera from './assets/camera.png';
import file from './assets/file.png';
import video from './assets/video.png';
import RequestModal from './components/RequestModal';
import Review from './components/ReviewModal';

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

const ConfirmDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  background-color: ${(props) => props.theme.colors.white};
`;
const Confirm = styled.div`
  width: 50%;
  height: 44px;
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
const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-name: ${(props) => {
    const test = props.onClickPlus;
    if (test === true) {
      return 'slideIn';
    }
    return 'slideOut';
  }};
  @keyframes slideIn {
    from {
      transform: rotate(0deg);
      color: #cccccc;
    }

    to {
      transform: rotate(45deg);
      color: ${(props) => props.theme.colors.blue};
    }
  }

  @keyframes slideOut {
    from {
      transform: rotate(45deg);
      color: ${(props) => props.theme.colors.blue};
    }

    to {
      transform: rotate(0deg);
      color: #cccccc;
    }
  }
`;
const FileInputOptions = styled.div`
  padding-top: 20px;
  width: 80%;
  display: ${(props) => {
    const test = props.onClickPlus;
    if (test === true) {
      return 'flex';
    }
    return 'none';
  }};
  justify-content: space-around;
  align-items: center;
`;

const FileOption = styled.div`
  display: inherit;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: lighter;
  flex-direction: column;
  & img {
    width: 55px;
    height: 55px;
    margin-bottom: 8px;
  }
`;
const MessageTypeBox = ({
  onChange,
  onSubmit,
  value,
  onKeydownChat,
  isMessage,
  onToggle,
  onClickPlus,
  requestButtonStatus,
  reviewButtonStatus,
}) => {
  const placeholder = '메세지를 입력하세요.';
  const [isRequest, setIsRequest] = useState(false);
  const [isReview, setIsReview] = useState(requestButtonStatus);
  const [step, setStep] = useState(requestButtonStatus ? 3 : 1);
  const toggleIsRequest = () => {
    setStep(1);
    setIsRequest((prev) => !prev);
  };
  const toggleNext = () => {
    setStep(2);
    setTimeout(() => setStep(3), 3000);
  };
  const history = useHistory();
  const click = () => {
    history.push('/result');
  };
  const toggleIsReview = () => setIsReview((prev) => !prev);
  return (
    <>
      <RequestModal
        isRequest={isRequest}
        ontoggle={toggleIsRequest}
        step={step}
        toggleNext={toggleNext}
      />
      <Review isRequest={isReview} ontoggle={toggleIsReview} />
      <Div onClickPlus={onClickPlus}>
        <ConfirmDiv>
          {requestButtonStatus ? (
            <Confirm onClick={click}>여행계획 다시보기</Confirm>
          ) : (
            <Confirm onClick={toggleIsRequest}>약속 확정하기</Confirm>
          )}
          {!reviewButtonStatus && <Line src={line} />}
          {requestButtonStatus ? (
            !reviewButtonStatus && (
              <Confirm onClick={toggleIsReview}>리뷰 작성하기</Confirm>
            )
          ) : (
            <Confirm onClick={() => toast('거래후 사용가능합니다.', 1200)}>
              리뷰 작성하기
            </Confirm>
          )}
        </ConfirmDiv>
        <TextWrapper>
          <Form onSubmit={onSubmit}>
            <IconDiv onClickPlus={onClickPlus} onClick={onToggle}>
              <AiOutlinePlus size={27} />
            </IconDiv>
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
        <FileInputOptions onClickPlus={onClickPlus}>
          <FileOption
            onClickPlus={onClickPlus}
            onClick={() => toast('준비중인 서비스 입니다.', 1200)}
          >
            <img src={camera} />
            사진
          </FileOption>
          <FileOption
            onClickPlus={onClickPlus}
            onClick={() => toast('준비중인 서비스 입니다.', 1200)}
          >
            <img src={video} />
            동영상
          </FileOption>
          <FileOption
            onClickPlus={onClickPlus}
            onClick={() => toast('준비중인 서비스 입니다.', 1200)}
          >
            <img src={file} />
            첨부파일
          </FileOption>
        </FileInputOptions>
      </Div>
    </>
  );
};
MessageTypeBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onKeydownChat: PropTypes.func.isRequired,
  isMessage: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onClickPlus: PropTypes.bool.isRequired,
  requestButtonStatus: PropTypes.bool.isRequired,
  reviewButtonStatus: PropTypes.bool.isRequired,
};

export default MessageTypeBox;
