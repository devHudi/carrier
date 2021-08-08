import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 50%;
`;

const Line = styled.div`
  left: 68px;
  width: 53px;
  height: 0px;
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  margin-bottom: 7px;
`;

const WelcomeText = styled.p`
  font-size: 28px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;

const Welcome = () => (
  <>
    <Wrapper>
      <Line />
      <WelcomeText>환영합니다!</WelcomeText>
    </Wrapper>
  </>
);

export default Welcome;
