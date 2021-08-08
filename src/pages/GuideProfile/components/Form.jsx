import styled, { keyframes } from 'styled-components';
import { Margin } from 'carrier-ui';
import Introduction from './Introduction';
import MainTheme from './MainTheme';
import Price from './Price';
import PictureAndVideo from './PictureAndVideo';
import Review from './Review';
import FAQ from './FAQ';
import NavButton from './NavButton';

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
  margin: 0;
  padding: 0;
`;

const Form = () => (
  <>
    <FormWrapper>
      <Margin size={20} />
      <MainTheme />
      <Margin size={20} />
      <Introduction />
      <Margin size={20} />
      <Price />
      <Margin size={20} />
      <PictureAndVideo />
      <Margin size={20} />
      <Review />
      <Margin size={20} />
      <FAQ />
      <Margin size={120} />
      <NavButton />
    </FormWrapper>
  </>
);

export default Form;
