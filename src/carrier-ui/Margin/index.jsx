import styled, { css } from 'styled-components';

const Margin = styled.div`
  height: ${(props) => props.size}px;

  ${(props) =>
    props.row &&
    css`
      height: 0;
      width: ${props.size}px;
    `}
`;

export default Margin;
