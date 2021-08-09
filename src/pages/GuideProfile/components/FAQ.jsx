import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import { Typography, Margin } from 'carrier-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 26px;
  opacity: 1;
  filter: blur(px);
  width: 100%;
  box-shadow: 0px 0px 20px -5px #ababab;
`;

const Blur = styled(Typography)`
  letter-spacing: 0px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}rem;
  opacity: 1;
`;

const FAQ = ({ guide }) => (
  <div>
    <Wrapper>
      <Container>
        <Typography headline>FAQ</Typography>
        <Margin size={20} />

        {_.map(guide?.faq, (faq) => (
          <>
            <Typography subhead>Q. {faq.question}</Typography>
            <Margin size={10} />
            <Blur body color="#ABABAB">
              A. {faq.answer}
            </Blur>
            <Margin size={30} />
          </>
        ))}
      </Container>
    </Wrapper>
  </div>
);

FAQ.propTypes = {
  guide: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FAQ;
