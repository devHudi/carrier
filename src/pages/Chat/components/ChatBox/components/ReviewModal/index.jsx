import { Container } from 'carrier-ui';
import PropTypes from 'prop-types';
import Form from './components/Form';

import { BackWrapper, Background, Wrapper } from './style';

const Review = ({ isRequest, ontoggle }) => (
  <>
    <Background isRequest={isRequest} onClick={ontoggle} />
    <BackWrapper isRequest={isRequest}>
      <Wrapper>
        <Container top={5} padding={30}>
          <Form ontoggle={ontoggle} />
        </Container>
      </Wrapper>
    </BackWrapper>
  </>
);
Review.propTypes = {
  isRequest: PropTypes.bool.isRequired,
  ontoggle: PropTypes.func.isRequired,
};

export default Review;
