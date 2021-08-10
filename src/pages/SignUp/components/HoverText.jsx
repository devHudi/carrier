import styled from 'styled-components';

const Wrapper = styled.div`
  top: 40%;
  left: 48%;
  position: absolute;
  width: 176px;
  height: 86px;
  padding: 14px;
  background-color: rgba(0, 0, 0, 0.7);
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  line-height: 1.2;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const SubText = styled.div`
  font-size: 12px;
  font-weight: 100;
  padding: 4px 6px 10px 6px;
`;
const HoverText = () => (
  <>
    <Wrapper>
      <Text>잠시만요!</Text>
      <SubText>
        현재 가이드 심사 기간이
        <br /> 아닙니다.
      </SubText>
    </Wrapper>
  </>
);

export default HoverText;
