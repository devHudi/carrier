import styled, { withTheme } from 'styled-components';

const Typography = styled.div`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : 'inherit'};
  line-height: 1.5;
  white-space: pre-wrap;
  z-index: inherit;
  text-overflow: ellipsis;
  overflow: hidden;

  ${(props) =>
    props.center &&
    `
      text-align: center;
    `}

  ${(props) =>
    props.underline &&
    `
      text-decoration: underline;
    `}

  ${(props) =>
    props.title &&
    `
      font-size: 1.75rem;
      font-weight: bold;
    `}

  ${(props) =>
    props.headline &&
    `
      font-size: 1.25rem;
      font-weight: bold;
    `}

  ${(props) =>
    props.subhead &&
    `
      font-size: 0.875rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.body &&
    `
      font-size: 0.875rem;
      font-weight: normal;
    `}

  ${(props) =>
    props.bold400 &&
    `
     font-weight : 400;
   `}

  ${(props) =>
    props.bold700 &&
    `
      font-weight : 700;
    `}

  ${(props) =>
    props.inline &&
    `
      display : inline-block;
    `}
`;

export default withTheme(Typography);
