import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import NextButton from './NextButton';

const titleFadeIn = keyframes`
100% {
  opacity: 1
}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  top: 143px;
  padding: 0 35px;
  width: 100%;
  opacity: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  animation-name: ${(props) => props.visible && titleFadeIn};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const SubtitleText = styled.div`
  margin-bottom: 10px;
  font-size: 15pt;
  color: ${(props) => props.theme.colors.white};
`;

const TitleText = styled.div`
  line-height: 1.2;
  font-size: 22pt;
  color: ${(props) => props.theme.colors.white};
`;

const Title = ({ step, onNextClick }) => (
  <>
    <TitleWrapper visible={step === 1}>
      <div>
        <SubtitleText>STEP 1</SubtitleText>
        <TitleText>
          여행 기본정보를
          <br />
          입력해주세요.
        </TitleText>
      </div>

      <NextButton onClick={onNextClick}>다음으로</NextButton>
    </TitleWrapper>

    <TitleWrapper visible={step === 2}>
      <div>
        <SubtitleText>STEP 2</SubtitleText>
        <TitleText>
          여행 취향을
          <br />
          입력해주세요.
        </TitleText>
      </div>
      <NextButton onClick={onNextClick}>다음으로</NextButton>
    </TitleWrapper>

    <TitleWrapper visible={step === 3}>
      <div>
        <SubtitleText>STEP 3</SubtitleText>
        <TitleText>
          기타 정보를
          <br />
          입력해주세요.
        </TitleText>
      </div>
      <NextButton onClick={onNextClick}>다음으로</NextButton>
    </TitleWrapper>
  </>
);

Title.propTypes = {
  step: PropTypes.number.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default Title;
