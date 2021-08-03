import { MdPets, MdPregnantWoman } from 'react-icons/md';
import { FaWheelchair } from 'react-icons/fa';

export default [
  {
    id: 'planner',
    title: '여행 계획 수립',
    subtitle: '가이드가 당신에게 맞춤형 여행 계획을 세워줍니다.',
    icon: <MdPets />,
  },
  {
    id: 'companion',
    title: '동행 가이드',
    subtitle: '가이드 당신과 함께 동행하며 가이드를 진행합니다.',
    icon: <FaWheelchair />,
  },
  {
    id: 'online',
    title: '온라인 가이드',
    subtitle: '가이드가 채팅 또는 음성으로 실시간 가이드를 진행합니다.',
    icon: <MdPregnantWoman />,
  },
];
