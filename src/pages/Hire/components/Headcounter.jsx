import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'carrier-ui';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 10px;
`;

const Divider = styled.div`
  width: 1px;
  border-left: 1px solid ${(props) => props.theme.colors.divider};
`;

const CounterWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CounterTitle = styled.div`
  margin-bottom: 17.5px;
  font-size: 8pt;
  color: ${(props) => props.theme.colors.inputText};
`;

const Counter = styled.div`
  margin: 0 12.5px;
  min-width: 20px;
  font-size: 13.5pt;
  text-align: center;
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.blue};
  border-radius: 12px;
  color: ${(props) => props.theme.colors.blue};
`;

const Headcounter = ({ kid, adult, onClick }) => (
  <Wrapper>
    <CounterWrapper>
      <CounterTitle>아이</CounterTitle>
      <Flex align="center">
        <Button onClick={() => onClick('kid', +1)}>+</Button>
        <Counter>{kid}</Counter>
        <Button onClick={() => onClick('kid', -1)}>-</Button>
      </Flex>
    </CounterWrapper>
    <Divider />
    <CounterWrapper>
      <CounterTitle>성인</CounterTitle>
      <Flex align="center">
        <Button onClick={() => onClick('adult', +1)}>+</Button>
        <Counter>{adult}</Counter>
        <Button onClick={() => onClick('adult', -1)}>-</Button>
      </Flex>
    </CounterWrapper>
  </Wrapper>
);

Headcounter.propTypes = {
  kid: PropTypes.number,
  adult: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

Headcounter.defaultProps = {
  kid: 0,
  adult: 0,
};

export default Headcounter;
