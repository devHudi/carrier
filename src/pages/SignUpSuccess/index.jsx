import Margin from 'carrier-ui/Margin';
import styled, { createGlobalStyle } from 'styled-components';
import RoundedButton from 'carrier-ui/RoundedButton';
import signinUpSuccess from './assets/signUpSuccess.png';

const MainContainer = createGlobalStyle`
  *{
    background-color: #ffffff;
  }
`;

const SignUpSuccess = () => {
  const Wrrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const ImgWrrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const StyledTypography = styled.div`
    font-size: 42px;
  `;
  const GrayTypography = styled.div`
    font-size: 24px;
    font-color: #9b9b9b;
  `;
  const ButtonText = styled.div`
    color: blue;
    font-size: 35px;
    margin: 15px;
  `;
  return (
    <>
      <MainContainer />
      <Margin size={180} />
      <ImgWrrapper>
        <img src={signinUpSuccess} width="207" height="291" alt="testA" />
      </ImgWrrapper>
      <Margin size={68} />
      <Wrrapper>
        <StyledTypography>
          <b>
            여행자 likelion 님의
            <br />
            가입이 완료되었어요!{' '}
          </b>
        </StyledTypography>
        <Margin size={16} />
        <GrayTypography>나에게 맞는 가이드를 찾아 가볼까요?</GrayTypography>
        <Margin size={102} />
        <RoundedButton blue width="540" radius="100">
          <ButtonText>나만의 가이드 찾으러 가기</ButtonText>
        </RoundedButton>
      </Wrrapper>
    </>
  );
};

export default SignUpSuccess;
