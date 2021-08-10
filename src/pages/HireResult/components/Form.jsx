import { PropTypes } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Margin, RoundedButton, Flex, Typography } from 'carrier-ui';
import { Link } from 'react-router-dom';
import RecommendedGuide from './RecommendedGuide';

const formFadeIn = keyframes`
  100% {
    opacity: 1
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0;
  animation-name: ${formFadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const SubTitle = styled.div`
  width: 400px;
  height: 30px;
  text-align: left;
  font: normal normal bold 15px/15px NanumSquare;
  letter-spacing: 0px;
  color: #c1c1c1;
  opacity: 1;
`;

const Form = ({ guides, submitId }) => (
  <FormWrapper>
    <div>
      <Typography headline>나만의 BEST 가이드</Typography>
      <Margin size={8} />

      <SubTitle>회원님을 위해 엄선된 가이드를 만나보세요!</SubTitle>
      <Margin size={10} />
    </div>

    <RecommendedGuide guides={guides} />

    <Flex justify="center">
      <Link to={`/hire/${submitId}/result/more`}>
        <RoundedButton blue filled width={250}>
          더 많은 가이드 보기
        </RoundedButton>
      </Link>
      <Margin size={80} />
    </Flex>
  </FormWrapper>
);

Form.propTypes = {
  guides: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitId: PropTypes.string.isRequired,
};

export default Form;
