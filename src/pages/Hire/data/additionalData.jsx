import { MdPets, MdPregnantWoman } from 'react-icons/md';
import { FaWheelchair, FaPills } from 'react-icons/fa';

export default [
  { id: 'pet', label: '반려동물과 동반', icon: <MdPets /> },
  { id: 'disabled', label: '이동에 어려움이 있음', icon: <FaWheelchair /> },
  { id: 'pregnancy', label: '임산부와 동행', icon: <MdPregnantWoman /> },
  { id: 'disease', label: '기타 질환이 있음', icon: <FaPills /> },
];
