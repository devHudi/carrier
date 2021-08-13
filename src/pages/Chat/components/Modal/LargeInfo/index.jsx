import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { firestore } from 'misc/firebase';
import placeData from 'assets/data/placeData';
import themeData from 'assets/data/themeData';
import languageData from 'assets/data/languageData';
import additionalData from 'assets/data/additionalData';
import _ from 'lodash';
import OptionButton from 'carrier-ui/OptionButton';
import {
  BasicInfo,
  Title,
  Wrapper,
  Img,
  Option,
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

const UserInfoModal = ({ userUid }) => {
  const [clickModal, setClickModal] = useState(false);
  const [submits, setSubmits] = useState([]);
  const themes = _.map(themeData, (theme) => ({ ...theme, type: null }));
  const ontoggle = () => setClickModal((prev) => !prev);
  const start = new Date(submits?.start_date?.toDate());
  const end = new Date(submits?.end_date?.toDate());
  const addData = [];
  const result = [];
  const dislike = [];
  const place = placeData?.find((places) => places.name === submits?.place);

  const languages = languageData?.find(
    (lang) => lang?.id === submits?.language,
  );

  submits.additionals?.forEach((doc) => {
    addData.push(additionalData?.find((theme) => theme?.id === doc));
  });
  submits.like_themes?.forEach((doc) => {
    result.push(themes?.find((theme) => theme?.id === doc));
  });

  submits.dislike_themes?.forEach((doc) => {
    dislike.push(themes?.find((theme) => theme?.id === doc));
  });
  useEffect(async () => {
    await firestore
      .collection('submits')
      .where('employer_uid', '==', userUid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setSubmits(doc.data());
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, [userUid]);
  return (
    <Wrapper background="https://blog.kakaocdn.net/dn/6CEcF/btqxVzYzsYJ/hW9z8hX5DgILkKPk8AYr70/img.png">
      <Title>
        <img src={line} />
        {place?.nameKr}
        <img src={line} />
      </Title>
      <BasicInfo onClickModal={clickModal}>
        <div>
          <Img src={calender} width="18" height="19" />
          {start.getMonth() + 1}월{start.getDate()}일 ~<br />
          {end.getMonth() + 1}월{end.getDate()}일
        </div>
        <div>
          <Img src={people} width="26" height="19" />
          성인 {submits?.adult_headcount} <br />
          아동 {submits?.kid_headcount}
        </div>
        <div>
          <Img src={star} width="20" height="19" />
          코스 추천/
          <br />
          전화 Q&A
        </div>
      </BasicInfo>
      {clickModal && (
        <>
          <BasicInfo onClickModal={clickModal}>
            <div>
              <Img src={money} width="11" height="19" />
              인당
              <br />
              {submits.budget}
            </div>
            <div>
              <Img src={car} width="22" height="19" />
              자동차,
              <br />
              기차
            </div>
            <div>
              <Img src={language} width="19" height="19" />
              {languages?.languageKr}
            </div>
            <div>
              <Img src={circle} width="19" height="19" />
              반려동물
              <br />
              동반
            </div>
          </BasicInfo>
          <Option>
            <Img src={heart} width="19" height="19" />
            <OptionTextWrapper>
              {_.map(result, (theme) => (
                <OptionButton name={theme.id} border blue icon={theme.icon}>
                  # {_.snakeCase(theme.label)}
                </OptionButton>
              ))}
            </OptionTextWrapper>
          </Option>
          <Option>
            <Img src={halfheart} width="19" height="19" marginTop="48" />
            <OptionTextWrapper>
              {_.map(dislike, (theme) => (
                <OptionButton name={theme.id} border blue icon={theme.icon}>
                  # {_.snakeCase(theme.label)}
                </OptionButton>
              ))}
            </OptionTextWrapper>
          </Option>
        </>
      )}
      <Slide ontoggle={ontoggle} clickModal={clickModal} />
    </Wrapper>
  );
};

UserInfoModal.propTypes = {
  userUid: PropTypes.string,
};

UserInfoModal.defaultProps = {
  userUid: '',
};
export default UserInfoModal;
