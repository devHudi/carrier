import styled, { css } from 'styled-components';

const RoundedButton = styled.button`
  padding: 15px;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  font-size: 12pt;
  background-color: transparent;
  border-radius: 25px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  ${(props) => {
    if (props.blue) {
      return css`
        border: 2px solid ${props.theme.colors.blue};
      `;
    }
    if (props.red) {
      return css`
        border: 2px solid ${props.theme.colors.red};
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
        `;
      }
      if (props.red) {
        return css`
          background-color: ${props.theme.colors.red};
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
