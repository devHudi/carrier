import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import SimilarGuide from './SimilarGuide';

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

const Form = ({ guides }) => (
  <FormWrapper>
    <SimilarGuide guides={guides} />
  </FormWrapper>
);

Form.propTypes = {
  guides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
