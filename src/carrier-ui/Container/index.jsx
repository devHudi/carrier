import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}px` : 'initial')};
  bottom: 0;
  width: 100%;
  padding: 35px;
  background-color: ${(props) => props.theme.colors.white};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export default Container;
