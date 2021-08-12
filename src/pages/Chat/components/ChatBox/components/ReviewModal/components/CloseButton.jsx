import { Flex } from 'carrier-ui';
import { RiCloseLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const CloseButton = ({ ontoggle }) => (
  <Flex justify="flex-end" align="center" onClick={ontoggle}>
    <RiCloseLine size="50" color="#5B5B5B" />
  </Flex>
);
CloseButton.propTypes = {
  ontoggle: PropTypes.func.isRequired,
};
export default CloseButton;
