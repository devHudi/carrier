import { Flex } from 'carrier-ui';
import { RiCloseLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';

const CloseButton = () => {
  const history = useHistory();
  const click = () => {
    history.goBack();
  };
  return (
    <Flex
      justify="flex-end"
      align="center"
      style={{ padding: '10px' }}
      onClick={click}
    >
      <RiCloseLine size="50" color="#5B5B5B" />
    </Flex>
  );
};

export default CloseButton;
