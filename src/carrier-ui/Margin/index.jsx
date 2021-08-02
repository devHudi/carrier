import styled, { css } from 'styled-components';

const Margin = styled.div`
  height: calc(${(props) => props.size} * 1rem);

  ${(props) =>
    props.row &&
    css`
      height: 0;
      width: calc(${props.size} * 1rem);
    `}
`;

export default Margin;
