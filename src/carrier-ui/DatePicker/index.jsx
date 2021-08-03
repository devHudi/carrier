import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { DateRange } from 'react-date-range';
import moment from 'moment';
import styled from 'styled-components';
import { BiCalendar } from 'react-icons/bi';
import {
  Dimmer,
  Typography,
  TextField,
  RoundedButton,
  Margin,
} from 'carrier-ui';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

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

const DatePicker = ({ startDate, endDate, onChange }) => {
  const [modal, setModal] = useState(false);
  const [selection, setSelection] = useState([
    {
      startDate,
      endDate,
      key: 'selection',
    },
  ]);

  useEffect(() => {
    onChange(selection[0].startDate, selection[0].endDate);
  }, [selection]);

  const dateText = useMemo(() => {
    const { startDate: _startDate, endDate: _endDate } = selection[0];

    const startDateText = _startDate
      ? moment(_startDate).format('yyyy-MM-DD')
      : '';
    const endDateText = _endDate ? moment(_endDate).format('yyyy-MM-DD') : '';
    return `${startDateText} ~ ${endDateText}`;
  }, [selection]);

  return (
    <>
      {modal && (
        <Dimmer>
          <Typography headline bold400 color="white">
            날짜를 선택해주세요.
          </Typography>
          <Margin size={10} />
          <DateRange
            onChange={(item) => setSelection([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={selection}
          />
          <Margin size={20} />
          <RoundedButton width="332" onClick={() => setModal(!modal)}>
            날짜 확정
          </RoundedButton>
        </Dimmer>
      )}

      <Wrapper onClick={() => setModal(!modal)}>
        <Icon>
          <BiCalendar />
        </Icon>
        <TextField value={dateText} />
      </Wrapper>
    </>
  );
};

DatePicker.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  startDate: new Date(),
  endDate: new Date(),
};

export default DatePicker;
