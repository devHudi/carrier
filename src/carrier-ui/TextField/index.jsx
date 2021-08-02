import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: 10px;
  font-size: 10pt;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  color: #4d4d4d;

  &::placeholder {
    color: ${(props) => props.theme.colors.inputPlaceholder};
  }

  &:focus {
    border: 1px solid;
    border-color: black;
  }
`;

function TextField({ value, placeholder, onChange }) {
  return <Input value={value} placeholder={placeholder} onChange={onChange} />;
}

TextField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.bool.isRequired,
};

TextField.defaultProps = {
  value: '',
  placeholder: '',
};

export default withTheme(TextField);
