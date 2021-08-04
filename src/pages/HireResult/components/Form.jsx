import Typography from 'carrier-ui/Typography';
import styled, { keyframes } from 'styled-components';
import { Margin, Button, Flex } from 'carrier-ui';
import { Link } from 'react-router-dom';
import RecommendedGuide from './RecommendedGuide';

const formFadeIn = keyframes`
  100% {
    opacity: 1
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0;
  animation-name: ${formFadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const SubTitle = styled.div`
  width: 500px;
  height: 30px;
  text-align: left;
  font: normal normal bold 15px/15px NanumSquare;
  letter-spacing: 0px;
  color: #c1c1c1;
  opacity: 1;
`;

const StyledButton = styled(Button)`
  color: white;
  box-shadow: 3px 3px 8px #00000029;
  border-radius: 45px;
  opacity: 1;
`;

const Form = () => (
  <>
    <FormWrapper>
      <div>
        <Typography headline>나만의 BEST 가이드</Typography>
        <Margin size={8} />

        <SubTitle>likelion님을 위해 엄선된 가이드를 만나보세요!</SubTitle>
        <Margin size={10} />
      </div>

      <RecommendedGuide />
      <Margin size={25} />

      <Flex justify="center">
        <Link to="/hire/result/more">
          <StyledButton>더 많은 가이드 보기</StyledButton>
        </Link>
      </Flex>
    </FormWrapper>
  </>
);

export default Form;
