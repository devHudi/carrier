import styled, { keyframes } from 'styled-components';
import { Margin } from 'carrier-ui';

import GuideMatching from './GuideMatching';
import TravelerReview from './TravelerReview';
import InterestGuide from './InterestGuide';

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

const TravelerForm = () => (
  <>
    <FormWrapper>
      <Margin size={20} />
      <InterestGuide />
      <Margin size={20} />
      <GuideMatching />
      <Margin size={20} />
      <TravelerReview />
      <Margin size={120} />
    </FormWrapper>
  </>
);

export default TravelerForm;
