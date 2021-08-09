import { useState } from 'react';
import {
  BasicInfo,
  Title,
  Wrapper,
  Img,
  Option,
  OptionText,
  OptionTextWrapper,
  Slide,
} from './style';
import calender from './assets/calender.png';
import car from './assets/car.png';
import halfheart from './assets/halfheart.png';
import heart from './assets/heart.png';
import language from './assets/language.png';
import money from './assets/money.png';
import people from './assets/people.png';
import star from './assets/star.png';
import circle from './assets/circle.png';
import line from './assets/line.png';

const UserInfoModal = () => {
  const [clickModal, setClickModal] = useState(false);
  const ontoggle = () => setClickModal((prev) => !prev);
  return (
    <Wrapper background="https://blog.kakaocdn.net/dn/6CEcF/btqxVzYzsYJ/hW9z8hX5DgILkKPk8AYr70/img.png">
      <Title>
        <img src={line} />
        부산
        <img src={line} />
      </Title>
      <BasicInfo onClickModal={clickModal}>
        <div>
          <Img src={calender} width="18" height="19" />
          7월 30일 ~<br />
          7월 31일
        </div>
        <div>
          <Img src={people} width="26" height="19" />
          성인 3<br />
          7아동 1
        </div>
        <div>
          <Img src={star} width="20" height="19" />
          코스 추천/
          <br />
          7전화 Q&A
        </div>
      </BasicInfo>
      {clickModal && (
        <>
          <BasicInfo onClickModal={clickModal}>
            <div>
              <Img src={money} width="11" height="19" />
              인당
              <br />
              7150,000
            </div>
            <div>
              <Img src={car} width="22" height="19" />
              자동차,
              <br />
              7기차
            </div>
            <div>
              <Img src={language} width="19" height="19" />
              중국어
            </div>
            <div>
              <Img src={circle} width="19" height="19" />
              반려동물
              <br />
              7동반
            </div>
          </BasicInfo>
          <Option>
            <Img src={heart} width="19" height="19" />
            <OptionTextWrapper>
              <OptionText># 데이트 코스</OptionText>
              <OptionText># 데이트 코스</OptionText>
            </OptionTextWrapper>
            <OptionTextWrapper>
              <OptionText># 데이트 코스</OptionText>
              <OptionText># 데이트 코스</OptionText>
            </OptionTextWrapper>
            <OptionTextWrapper>
              <OptionText># 데이트 코스</OptionText>
              <OptionText># 데이트 코스</OptionText>
            </OptionTextWrapper>
          </Option>
          <Option>
            <Img src={halfheart} width="19" height="19" marginTop="48" />
            <OptionTextWrapper>
              <OptionText># 데이트 코스</OptionText>
              <OptionText># 데이트 코스</OptionText>
            </OptionTextWrapper>
            <OptionTextWrapper>
              <OptionText># 데이트 코스</OptionText>
              <OptionText># 데이트 코스</OptionText>
            </OptionTextWrapper>
            <OptionTextWrapper>
              <OptionText># 데이트 코스</OptionText>
              <OptionText># 데이트 코스</OptionText>
            </OptionTextWrapper>
          </Option>
        </>
      )}
      <Slide ontoggle={ontoggle} clickModal={clickModal} />
    </Wrapper>
  );
};
export default UserInfoModal;
