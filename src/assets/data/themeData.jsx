import { FaUmbrellaBeach, FaSwimmer } from 'react-icons/fa';
import { FiHeart, FiCamera, FiGift, FiShoppingBag } from 'react-icons/fi';
import {
  GiSpotedFlower,
  GiPineTree,
  GiNoodles,
  GiParkBench,
  GiAncientColumns,
  GiAsianLantern,
} from 'react-icons/gi';
import { SiSnapcraft } from 'react-icons/si';

export default [
  { id: 'date_course', label: '데이트 코스', icon: <FiHeart /> },
  { id: 'flower', label: '꽃이 만개한', icon: <GiSpotedFlower /> },
  { id: 'photo_zone', label: '포토존', icon: <FiCamera /> },
  { id: 'nature', label: '자연에서 휴양하기', icon: <GiPineTree /> },
  { id: 'ocean', label: '바다가 들린다', icon: <FaUmbrellaBeach /> },
  { id: 'hand_made', label: '핸드 메이드', icon: <SiSnapcraft /> },
  { id: 'leisure_sports', label: '레저 스포츠', icon: <FaSwimmer /> },
  { id: 'souvenir', label: '기념품', icon: <FiGift /> },
  { id: 'shopping', label: '쇼핑 중독', icon: <FiShoppingBag /> },
  { id: 'foodie', label: '식도락 여행', icon: <GiNoodles /> },
  { id: 'theme_park', label: '테마파크', icon: <GiParkBench /> },
  { id: 'cultural_heritage', label: '문화재 탐방', icon: <GiAncientColumns /> },
  { id: 'history', label: '역사가 살아있는', icon: <GiAsianLantern /> },
];
