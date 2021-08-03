import { Dimmer, Flex } from 'carrier-ui';
import MDSpinner from 'react-md-spinner';

const PageSpinner = () => (
  <Dimmer>
    <Flex>
      <MDSpinner />
    </Flex>
  </Dimmer>
);

export default PageSpinner;
