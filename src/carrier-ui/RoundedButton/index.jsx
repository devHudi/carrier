import styled, { css } from 'styled-components';

const RoundedButton = styled.button`
  padding: 15px;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '12px')};
  background-color: transparent;
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '25px')};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : 'white'};
  cursor: pointer;

  ${(props) => {
    if (props.blue) {
      return css`
        border: 2px solid ${props.theme.colors.blue};
        color: ${props.theme.colors.blue};
      `;
    }
    if (props.red) {
      return css`
        border: 2px solid ${props.theme.colors.red};
        color: ${props.theme.colors.blue};
      `;
    }
    return css`
      border: 2px solid ${props.theme.colors.white};
    `;
  }}

  ${(props) => {
    if (props.filled) {
      if (props.blue) {
        return css`
          background-color: ${props.theme.colors.blue};
          color: ${props.theme.colors.white};
        `;
      }
      if (props.red) {
        return css`
          background-color: ${props.theme.colors.red};
          color: ${props.theme.colors.white};
        `;
      }
      return css`
        background-color: ${props.theme.colors.white};
        color: ${props.theme.colors.black};
      `;
    }
    return '';
  }}
`;

export default RoundedButton;
