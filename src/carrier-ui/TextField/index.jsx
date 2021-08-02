import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import { Typography } from 'carrier-ui';

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
    background-repeat: no-repeat;
    background-position: 10px center;
    padding: 10px 12px 10px 40px;
    `}
`;

function TextField({ label, value, search }) {
  return (
    <div>
      {label && (
        <Typography body2 color="black">
          {label}
        </Typography>
      )}
      <Input value={value} search={search} />
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  search: PropTypes.bool,
};

TextField.defaultProps = {
  label: undefined,
  value: '',
  search: false,
};

export default withTheme(TextField);
