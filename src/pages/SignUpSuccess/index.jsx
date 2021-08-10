import styled from 'styled-components';
import { RoundedButton, Margin } from 'carrier-ui';
import signinUpSuccess from './assets/signUpSuccess.png';

const Section = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignUpSuccess = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledTypography = styled.div`
    display: flex;
    justify-content: center;
    font-size: 21px;
  `;

  const GrayTypography = styled.div`
    font-size: 12px;
    color: #9b9b9b;
  `;

  return (
    <Section>
      <ImgWrapper>
        <img src={signinUpSuccess} width="207" height="291" alt="testA" />
      </ImgWrapper>
      <Margin size={34} />
      <Wrapper>
        <StyledTypography>
          <b>여행자 님의</b>
        </StyledTypography>
        <StyledTypography>
          <b>가입이 완료되었어요! </b>
        </StyledTypography>
        <Margin size={8} />
        <GrayTypography>나에게 맞는 가이드를 찾아 가볼까요?</GrayTypography>
        <Margin size={51} />
        <RoundedButton blue width="270" radius="100" color="blue" fontSize="17">
          나만의 가이드 찾으러 가기
        </RoundedButton>
      </Wrapper>
    </Section>
  );
};

export default SignUpSuccess;
