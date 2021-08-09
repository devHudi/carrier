import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { Typography, Flex, Margin } from 'carrier-ui';
import themeData from 'assets/data/themeData';

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

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 10px 14px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 30px;
  background-color: transparent;
  font-size: 13px;
  transition: background-color 0.3s, border 0.3s, color 0.3s;
`;

const WrappedFlex = styled(Flex)`
  flex-wrap: wrap;
`;

const MainTheme = ({ guide }) => (
  <div>
    <Wrapper>
      <Container>
        <Typography headline>주력 테마</Typography>
        <Margin size={10} />
        <WrappedFlex>
          {_.map(guide.themes, (theme) => (
            <ThemeContainer>
              # {_.snakeCase(_.find(themeData, { id: theme }).label)}
              {_.find(themeData, { id: theme }).icon}
            </ThemeContainer>
          ))}
        </WrappedFlex>
        <Margin size={10} />
      </Container>
    </Wrapper>
  </div>
);

MainTheme.propTypes = {
  guide: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainTheme;
