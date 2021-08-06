import styled, { keyframes } from 'styled-components';
import { Margin } from 'carrier-ui';
import Introduction from './Introduction';
import MainTheme from './MainTheme';

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
      <MainTheme />
      <Margin size={20} />
      <Introduction />
    </FormWrapper>
  </>
);

export default Form;
