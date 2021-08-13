import PropTypes from 'prop-types';
import Form from './components/Form';

import { BackWrapper, Background, Wrapper } from './style';

const Review = ({ isRequest, ontoggle }) => (
  <>
    <Background isRequest={isRequest} onClick={ontoggle} />
    <BackWrapper isRequest={isRequest}>
      <Wrapper>
        <Form ontoggle={ontoggle} />
      </Wrapper>
    </BackWrapper>
  </>
);
Review.propTypes = {
  isRequest: PropTypes.bool.isRequired,
  ontoggle: PropTypes.func.isRequired,
};

export default Review;
