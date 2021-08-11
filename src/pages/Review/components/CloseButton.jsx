import { Flex } from 'carrier-ui';
import { RiCloseLine } from 'react-icons/ri';

const CloseButton = () => (
  <Flex justify="flex-end" align="center">
    <RiCloseLine size="50" color="#5B5B5B" />
  </Flex>
);

export default CloseButton;
