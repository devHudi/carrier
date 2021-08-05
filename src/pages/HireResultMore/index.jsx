import Margin from 'carrier-ui/Margin';
import { useHistory } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Form from './components/Form';
import Navigation from './components/Navigation';

const GlobalStyle = createGlobalStyle`
  body {
    background: #EEEFFF 0% 0% no-repeat padding-box;
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}px` : 'initial')};
  bottom: 0;
  width: 100%;
  padding: 35px;
  overflow: scroll;
`;

const HireResultMore = () => {
  const history = useHistory();

  return (
    <>
      <GlobalStyle />
      <Navigation
        leftIcon="back"
        onLeftIconClick={() => history.goBack()}
        title="이번 여행의 추천 가이드"
      />
      <Margin size={10} />
      <Container top={140}>
        <Form history={history} />
      </Container>
    </>
  );
};

export default HireResultMore;
