import { useState, useEffect } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import {
  Typography,
  DatePicker,
  Margin,
  RangeSlider,
  OptionButton,
  Dropdown,
} from 'carrier-ui';

import vehicleData from 'assets/data/vehicleData';
import themeData from 'assets/data/themeData';
import additionalData from 'assets/data/additionalData';
import guideData from 'assets/data/guideData';

import Headcounter from './Headcounter';
import AdditionalSelection from './AdditionalSelection';
import GuideType from './GuideType';

const formFadeIn = keyframes`
  100% {
    opacity: 1
  }
`;

const FormWrapper = styled.div`
  position: relative;
  width: 100%;
  opacity: 0;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  animation-name: ${(props) => (props.visible ? formFadeIn : '')};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const Budget = styled.div`
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.inputText};
  font-size: 10pt;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AdditionalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GuideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const getFormData = (
  date,
  headcount,
  budget,
  vehicles,
  themes,
  language,
  additionals,
  guides,
) => {
  let _language = null;
  if (language === 'English') _language = 'english';
  else if (language === 'Japanese') _language = 'japanese';
  else if (language === 'Chinese') _language = 'chinese';
  else if (language === 'Other languages') _language = 'etc';

  return {
    start_date: date.startDate,
    end_date: date.endDate,
    kid_headcount: headcount.kid,
    adult_headcount: headcount.adult,
    budget: Math.floor(10000000 * (budget / 100)),
    vehicles: _.chain(vehicles)
      .filter({ selected: true })
      .reduce((acc, cur) => [...acc, cur.id], [])
      .value(),
    like_themes: _.chain(themes)
      .filter({ type: 'like' })
      .reduce((acc, cur) => [...acc, cur.id], [])
      .value(),
    dislike_themes: _.chain(themes)
      .filter({ type: 'dislike' })
      .reduce((acc, cur) => [...acc, cur.id], [])
      .value(),
    language: _language,
    additionals: _.chain(additionals)
      .filter({ selected: true })
      .reduce((acc, cur) => [...acc, cur.id], [])
      .value(),
    guides: _.chain(guides)
      .filter({ selected: true })
      .reduce((acc, cur) => [...acc, cur.id], [])
      .value(),
  };
};

const Form = ({ step, onSubmit }) => {
  /* States */

  // 여행 일정
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  // 인원 수
  const [headcount, setHeadcount] = useState({
    kid: 0,
    adult: 0,
  });

  // 인당 여행 경비
  const [budget, setBudget] = useState(10);

  // 교통 수단
  const [vehicles, setVehicles] = useState(
    _.map(vehicleData, (vehicle) => ({ ...vehicle, selected: false })),
  );

  // 선호/불호 테마
  //   type이 null 이면 선택안됨, "like" 이면 선호로 선택됨, "dislike" 이면 불호로 선택됨
  const [themes, setThemes] = useState(
    _.map(themeData, (theme) => ({ ...theme, type: null })),
  );

  // 외국어 지원
  const [language, setLanguage] = useState('필요 없음');

  // 추가 사항
  const [additionals, setAdditionals] = useState(
    _.map(additionalData, (additional) => ({ ...additional, selected: false })),
  );

  // 가이드 유형
  const [guides, setGuides] = useState(
    _.map(guideData, (guide) => ({ ...guide, selected: false })),
  );

  /* UseEffects */

  useEffect(() => {
    if (step > 3) {
      onSubmit(
        getFormData(
          date,
          headcount,
          budget,
          vehicles,
          themes,
          language,
          additionals,
          guides,
        ),
      );
    }
  }, [step]);

  /* Events */

  const onHeadcounterClick = (type, delta) => {
    const count = headcount[type] + delta;
    if (count < 0) return;

    setHeadcount({ ...headcount, [type]: count });
  };

  const onBudgeRangeChange = (e) => {
    setBudget(Number(e.target.value));
  };

  const onVehicleClick = (e) => {
    setVehicles(
      _.map(vehicles, (vehicle) => {
        if (vehicle.id === e.target.name) {
          if (vehicle.selected) return { ...vehicle, selected: false };
          return { ...vehicle, selected: true };
        }
        return { ...vehicle };
      }),
    );
  };

  const onThemeClick = (name, type) => {
    setThemes(
      _.map(themes, (theme) => {
        if (theme.id === name) {
          if (theme.type === type) return { ...theme, type: null };
          if (type === 'dislike') return { ...theme, type: 'dislike' };
          return { ...theme, type: 'like' };
        }
        return { ...theme };
      }),
    );
  };

  const onAdditionalClick = (e) => {
    setAdditionals(
      _.map(additionals, (additional) => {
        if (additional.id === e.target.name) {
          if (additional.selected) return { ...additional, selected: false };
          return { ...additional, selected: true };
        }
        return { ...additional };
      }),
    );
  };

  const onGuideClick = (e) => {
    setGuides(
      _.map(guides, (guide) => {
        if (guide.id === e.target.name) {
          if (guide.selected) return { ...guide, selected: false };
          return { ...guide, selected: true };
        }
        return { ...guide };
      }),
    );
  };

  return (
    <>
      <FormWrapper visible={step === 1}>
        <Typography headline>여행 일정</Typography>
        <Margin size={8} />

        <DatePicker
          onChange={(startDate, endDate) => {
            setDate({
              startDate,
              endDate,
            });
          }}
        />
        <Margin size={25} />

        <Typography headline>인원 수</Typography>
        <Margin size={8} />

        <Headcounter
          kid={headcount.kid}
          adult={headcount.adult}
          onClick={onHeadcounterClick}
        />
        <Margin size={25} />

        <Typography headline>인당 여행 경비</Typography>
        <Margin size={8} />

        <Budget>0 ~ {(10000000 * (budget / 100)).toLocaleString()} 원</Budget>
        <RangeSlider percentage={budget} onChange={onBudgeRangeChange} />
        <Margin size={25} />

        <Typography headline>교통 수단</Typography>
        <Margin size={8} />

        <OptionWrapper>
          {_.map(vehicles, (vehicle) => (
            <OptionButton
              name={vehicle.id}
              activated={vehicle.selected}
              onClick={onVehicleClick}
            >
              {vehicle.label}
            </OptionButton>
          ))}
        </OptionWrapper>
      </FormWrapper>

      <FormWrapper visible={step === 2}>
        <Typography headline>선호하는 테마</Typography>
        <Margin size={8} />

        <OptionWrapper>
          {_.map(themes, (theme) => (
            <OptionButton
              name={theme.id}
              border
              blue
              activated={theme.type === 'like'}
              disabled={theme.type === 'dislike'}
              icon={theme.icon}
              onClick={(e) => {
                onThemeClick(e.target.name, 'like');
              }}
            >
              # {_.snakeCase(theme.label)}
            </OptionButton>
          ))}
        </OptionWrapper>
        <Margin size={25} />

        <Typography headline>불호하는 테마</Typography>
        <Margin size={8} />
        <OptionWrapper>
          {_.map(themes, (theme) => (
            <OptionButton
              name={theme.id}
              border
              red
              activated={theme.type === 'dislike'}
              disabled={theme.type === 'like'}
              icon={theme.icon}
              onClick={(e) => {
                onThemeClick(e.target.name, 'dislike');
              }}
            >
              # {_.snakeCase(theme.label)}
            </OptionButton>
          ))}
        </OptionWrapper>
      </FormWrapper>

      <FormWrapper visible={step >= 3}>
        <Typography headline>외국어 지원</Typography>
        <Margin size={8} />
        <Dropdown
          items={['필요 없음', '영어', '일본어', '중국어', '기타']}
          onChange={(item) => setLanguage(item)}
        />

        <Margin size={25} />

        <Typography headline>추가 사항</Typography>
        <Margin size={8} />

        <AdditionalWrapper>
          {_.map(additionals, (additional) => (
            <AdditionalSelection
              name={additional.id}
              label={additional.label}
              icon={
                additional.selected ? additional.activatedIcon : additional.icon
              }
              activated={additional.selected}
              onClick={onAdditionalClick}
            />
          ))}
        </AdditionalWrapper>
        <Margin size={25} />

        <Typography headline>가이드 유형</Typography>
        <Margin size={8} />

        <GuideWrapper>
          {_.map(guides, (guide) => (
            <GuideType
              name={guide.id}
              title={guide.title}
              subtitle={guide.subtitle}
              activated={guide.selected}
              icon={guide.icon}
              onClick={onGuideClick}
            />
          ))}
        </GuideWrapper>
      </FormWrapper>
    </>
  );
};

Form.propTypes = {
  step: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
