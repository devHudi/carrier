import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Text = styled.textarea`
  width: 100%;
  height: 100%;
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

const TextReview = ({ value, onChangeReview }) => (
  <Container>
    <Text
      placeholder="가이드에 대한 평가를 남겨주세요."
      vlaue={value}
      onChange={onChangeReview}
    />
  </Container>
);

TextReview.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeReview: PropTypes.func.isRequired,
};

export default TextReview;
