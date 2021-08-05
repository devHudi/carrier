import pet from '../assets/pet.svg';
import disabled from '../assets/disabled.svg';
import pregnant from '../assets/pregnant.svg';
import disease from '../assets/disease.svg';
import petActivated from '../assets/pet-activated.svg';
import disabledActivated from '../assets/disabled-activated.svg';
import pregnantActivated from '../assets/pregnant-activated.svg';
import diseaseActivated from '../assets/disease-activated.svg';

export default [
  {
    id: 'pet',
    label: '반려동물과 동반',
    icon: pet,
    activatedIcon: petActivated,
  },
  {
    id: 'disabled',
    label: '이동에 어려움이 있음',
    icon: disabled,
    activatedIcon: disabledActivated,
  },
  {
    id: 'pregnant',
    label: '임산부와 동행',
    icon: pregnant,
    activatedIcon: pregnantActivated,
  },
  {
    id: 'disease',
    label: '기타 질환이 있음',
    icon: disease,
    activatedIcon: diseaseActivated,
  },
];
