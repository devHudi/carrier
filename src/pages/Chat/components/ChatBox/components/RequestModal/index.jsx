import PropTypes from 'prop-types';
import toast from 'react-simple-toasts';
import { useState } from 'react';
import {
  Wrapper,
  WrapperOne,
  WrapperTwo,
  WrapperThree,
  Background,
  TextDiv,
  OptionsDiv,
  BoldFont,
  SmallFont,
  Img,
  Title,
  Submit,
  BackWrapper,
  PlanOptionDiv,
} from './styles';
import company from './assets/company.png';
import course from './assets/course.png';
import route from './assets/route.png';
import travel from './assets/travel.png';

const RequestModal = ({ isRequest, ontoggle, step, toggleNext }) => {
  const [onClickButton, setOnClickButton] = useState(false);
  const clickButton = () => setOnClickButton((prev) => !prev);
  return (
    <>
      <Background isRequest={isRequest} onClick={ontoggle} />
      <BackWrapper isRequest={isRequest}>
        <Wrapper isRequest={step}>
          <WrapperOne isRequest={step === 1}>
            <Title>약속한 서비스를 선택해주세요</Title>
            <PlanOptionDiv onClickButton={onClickButton} onClick={clickButton}>
              <Img src={route} />
              <TextDiv>
                <BoldFont>여행 코스 계획</BoldFont>
                <SmallFont>
                  가이드에게 맞춤형 여행 코스를
                  <br />
                  전달받습니다.
                </SmallFont>
              </TextDiv>
            </PlanOptionDiv>
            <OptionsDiv
              onClick={() => toast('COVID-19로 인해 불가능 합니다.', 1200)}
            >
              <Img src={company} />
              <TextDiv>
                <BoldFont>동행 가이드</BoldFont>
                <SmallFont>
                  가이드와 동행하여 여행을
                  <br />
                  진행합니다.
                </SmallFont>
              </TextDiv>
            </OptionsDiv>
            <OptionsDiv onClick={() => toast('서비스 준비중 입니다', 1200)}>
              <Img src={course} />
              <TextDiv>
                <BoldFont>온라인 가이드</BoldFont>
                <SmallFont>
                  여행 중 채팅 기능을 통해
                  <br />
                  실시간 가이드를 진행합니다.
                </SmallFont>
              </TextDiv>
            </OptionsDiv>
            {onClickButton ? (
              <Submit onClick={toggleNext}>거래요청</Submit>
            ) : (
              <Submit onClick={() => toast('서비스를 선택하세요.', 1200)}>
                거래요청
              </Submit>
            )}
          </WrapperOne>
          <WrapperTwo isRequest={step === 2}>
            <img src={travel} />
          </WrapperTwo>
          <WrapperThree isRequest={step === 3}>
            <Title>약속한 서비스를 선택해주세요</Title>
            <img src={company} />
            <Submit onClick={toggleNext}>거래확정</Submit>
          </WrapperThree>
        </Wrapper>
      </BackWrapper>
    </>
  );
};
RequestModal.propTypes = {
  isRequest: PropTypes.bool.isRequired,
  ontoggle: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  toggleNext: PropTypes.func.isRequired,
};

export default RequestModal;
