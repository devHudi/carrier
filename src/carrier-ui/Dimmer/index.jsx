import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'carrier-ui';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 999;

  & > div {
    width: 100%;
    height: 100%;
  }
`;

const Dimmer = ({ children }) => (
  <Wrapper>
    <Flex justify="center" align="center" direction="column">
      {children}
    </Flex>
  </Wrapper>
);

Dimmer.propTypes = {
  children: PropTypes.node,
};

Dimmer.defaultProps = {
  children: <></>,
};

export default Dimmer;
