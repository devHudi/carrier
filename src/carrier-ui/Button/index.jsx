import styled, { css, withTheme } from 'styled-components';

const Button = styled.button`
  position: relative;
  height: 50px;
  width: 250px;
  border-radius: 10px;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.primary};
  z-index: inherit;

  ${props =>
    props.round &&
    css`
      border-radius: 24px;
    `}

  ${props =>
    props.large &&
    css`
      width: 80px;
      height: 350px;
      font-size: 1.5rem;
    `};

  ${props =>
    props.medium &&
    css`
      width: 50px;
      height: 250px;
      font-size: 1rem;
    `};

  ${props =>
    props.small &&
    css`
      width: 35px;
      height: 200px;
      font-size: 0.75rem;
    `};

  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${props.primary
        ? props.theme.colors.white
        : props.theme.colors.disabled};
      color: ${props.primary
        ? props.theme.colors.gray400
        : props.theme.colors.onDisabled};
      border: 1px solid
        ${props.primary ? props.theme.colors.gray400 : props.theme.colors.border};
      cursor: default;
    `}

  ${props =>
    props.color &&
    css`
      color: ${props.theme.colors[props.color]};
    `}

`;

export default withTheme(Button);
