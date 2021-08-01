import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import { Typography, Margin } from 'carrier-ui';

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 10px;
  font-size: 1rem;
  padding: 10px;
  width: 300px;
  height: 50px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }

  &:focus {
    border: 1px solid;
    border-color: black;
  }

  ${(props) =>
    props.large &&
    `
      width: 450px;
      height: 70px;
      padding: 15px;
    `}

  ${(props) =>
    props.medium &&
    `
    width: 300px;
    height: 50px;
  `}

  ${(props) =>
    props.small &&
    `
    width: 250px;
    height: 40px;
    padding: 8px;
  `}

  ${(props) =>
    props.search &&
    `
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 10px center;
    padding: 10px 12px 10px 40px;
    `}
`;

function TextField({ label, value, search, disabled, ...rest }) {
  return (
    <div>
      {label && (
        <Typography body2 color="black">
          {label}
        </Typography>
      )}
      <Input value={value} search={search} disabled={disabled} {...rest} />
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  success: PropTypes.string,
  error: PropTypes.string,
  comment: PropTypes.string,
  validate: PropTypes.bool,
  search: PropTypes.bool,
  noMessage: PropTypes.bool,
  noMargin: PropTypes.bool,
};

TextField.defaultProps = {
  label: undefined,
  value: '',
  success: '',
  error: '',
  comment: '',
  validate: undefined,
  search: false,
  noMessage: false,
  noMargin: false,
};

export default withTheme(TextField);
