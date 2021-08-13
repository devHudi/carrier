import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 44px 0 50px 7%;
  margin-top: 10px;
`;

const Text = styled.div`
  line-height: 1.2;
  font-size: 22pt;
  color: ${(props) => props.theme.colors.black};
  font-weight: 800;
`;

const Outline = () => (
  <>
    <Wrapper>
      <div>
        <Text>
          당신만을 위한
          <br />
          맞춤형 가이드를
          <br />
          추천해드릴게요.
        </Text>
      </div>
    </Wrapper>
  </>
);

export default Outline;
