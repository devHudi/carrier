import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: yellow;
  z-index: 500;
  position: absolute;
  display: ${(props) => {
    const test = props.isReview;
    if (test === true) {
      return 'block';
    }
    return 'none';
  }};
`;

const ReviewModal = () => <Wrapper>리뷰 모달입니다.</Wrapper>;
export default ReviewModal;
