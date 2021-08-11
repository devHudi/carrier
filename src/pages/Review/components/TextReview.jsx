import styled from 'styled-components';

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Text = styled.textarea`
  width: 100%;
  height: 300px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #afafaf;
  border-radius: 20px;
  opacity: 1;
  margin: 20px;
  padding: 15px;
  ::placeholder {
    font: normal normal normal 14px/16px NanumSquare;
    letter-spacing: 0px;
    color: #bfbfbf;
    opacity: 1;
  }
`;

const TextReview = () => (
  <Container>
    <Text placeholder="가이드에 대한 평가를 남겨주세요." />
  </Container>
);

export default TextReview;
