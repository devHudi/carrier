import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Margin } from 'carrier-ui';

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 7px 11px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 30px;
  background-color: transparent;
  font-size: 11px;
  transition: background-color 0.3s, border 0.3s, color 0.3s;

  ${(props) =>
    props.activated &&
    css`
      background-color: ${props.theme.colors.primary};
      border: 1px solid transparent;
      color: ${props.theme.colors.white};
    `}

  ${(props) => {
    let color = props.theme.colors.inputBorder;
    if (props.red) color = props.theme.colors.red;
    if (props.blue) color = props.theme.colors.blue;

    if (props.activated && props.border) {
      return css`
        background-color: transparent;
        border: 1px solid ${color};
        color: ${color};
        font-weight: bold;
      `;
    }
    return '';
  }}

  ${(props) =>
    props.disabled &&
    css`
      background-color: transparent;
      border: 1px solid ${props.theme.colors.disabled};
      font-weight: normal;
      color: ${props.theme.colors.disabled};
    `}
`;

const OptionButton = ({
  name,
  activated,
  border,
  red,
  blue,
  disabled,
  icon,
  onClick,
  children,
}) => (
  <Wrapper
    name={name}
    activated={activated}
    border={border}
    red={red}
    blue={blue}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
    <Margin row size={2} /> {icon}
  </Wrapper>
);

OptionButton.propTypes = {
  name: PropTypes.string,
  activated: PropTypes.bool,
  border: PropTypes.bool,
  red: PropTypes.bool,
  blue: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

OptionButton.defaultProps = {
  name: '',
  activated: false,
  border: false,
  red: false,
  blue: false,
  disabled: false,
  icon: '',
  onClick: () => {},
  children: '',
};

export default OptionButton;
