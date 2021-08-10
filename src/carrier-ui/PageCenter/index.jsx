import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from 'carrier-ui/Flex';
import WidthLimit from 'carrier-ui/WidthLimit';

const StyledWidthLimit = styled(WidthLimit)`
  height: 100% !important;
`;

const StyledFlex = styled(Flex)`
  height: 100% !important;
`;

const ResWarning = ({ children }) => (
  <StyledWidthLimit>
    <StyledFlex justify="center" align="center" direction="column">
      {children}
    </StyledFlex>
  </StyledWidthLimit>
);

ResWarning.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResWarning;
