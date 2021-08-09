import { useState, useEffect } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { TextField } from 'carrier-ui';

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled.div`
  padding: 10px;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.theme.colors.blue};
`;

const ItemWrapper = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 3px 0 20px rgba(0, 0, 0, 0.2);
`;

const Item = styled.div`
  padding: 12px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.inputText};
`;

const Dropdown = ({ items, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(items.length > 0 ? items[0] : '');

  useEffect(() => {
    onChange(selection);
  }, [selection]);

  return (
    <Wrapper onClick={() => setOpen(!open)}>
      <Icon>
        <IoIosArrowDown />
      </Icon>

      <TextField value={selection} />

      {open && (
        <ItemWrapper>
          {_.map(items, (item) => (
            <Item onClick={() => setSelection(item)}>{item}</Item>
          ))}
        </ItemWrapper>
      )}
    </Wrapper>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  items: [],
};

export default Dropdown;
