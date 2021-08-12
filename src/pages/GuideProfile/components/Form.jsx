import { PropTypes } from 'prop-types';
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

const Form = ({ user, guide, reviews }) => (
  <FormWrapper>
    <MainTheme guide={guide} />
    <Margin size={13} />
    <Introduction guide={guide} />
    <Margin size={13} />
    <Price guide={guide} />
    <Margin size={13} />
    <PictureAndVideo guide={guide} />
    <Margin size={13} />
    <Review guide={guide} reviews={reviews} />
    <Margin size={13} />
    <FAQ guide={guide} />
    <Margin size={100} />
    <NavButton user={user} guide={guide} />
  </FormWrapper>
);

Form.propTypes = {
  user: PropTypes.object.isRequired,
  guide: PropTypes.object.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
