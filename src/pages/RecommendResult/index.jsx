import styled, { createGlobalStyle } from 'styled-components';
import CloseButton from './components/CloseButton';
import Form from './components/Form';

const GlobalStyle = createGlobalStyle`
  body {
    background: #FBFCFF 0% 0% no-repeat padding-box;
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  top: ${(props) => (props.top ? `${props.top}px` : 'initial')};
  bottom: 0;
  padding: 25px;
  padding-top: 10px;
  width: 100%;
`;

const RecommendResult = () => (
  <>
    <GlobalStyle />
    <CloseButton />
    <Container top={1}>
      <Form />
    </Container>
  </>
);

export default RecommendResult;
