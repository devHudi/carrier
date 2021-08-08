import _ from 'lodash';
import { firestore } from 'misc/firebase';

export const getRecommendedGuides = async (submitId) => {
  const {
    like_themes: likeThemes,
    dislike_themes: dislikeThemes,
    guides: guidesType,
    language,
    sido,
    place,
  } = (await firestore.collection('submits').doc(submitId).get()).data();

  const guides = [];
  (
    await firestore.collection('users').where('type', '==', 'employee').get()
  ).forEach((querySnapshot) => guides.push(querySnapshot.data()));

  // 지역(시/도), 가이드유형, 언어지원 일치여부로 1차 가이드 필터링
  const filteredGuides = _.chain(guides).filter((guide) => {
    // 유저가 선택한 지역(시/도)와 가이드의 지역(시/도)가 일치할 경우 true
    const placeCoincided = guide.place?.sido === sido;

    // 선택지의 가이드유형 중 하나라도 가이드의 가이드 유형에 포함될 경우 true
    const guideTypeIncluded =
      _.filter(guidesType, (type) => _.includes(guide.guide_types, type))
        .length > 0;

    // 사용자가 언어선택을 하지 않았을 경우 무조건 true
    // 사용자가 언어선택을 한 경우 해당 언어를 지원하는 가이드만 true
    let languageIncluded = false;
    if (!language) languageIncluded = true;
    else languageIncluded = _.includes(guide.languages, language);

    // 위 조건을 만족해야 추천 가이드 대상
    return placeCoincided && guideTypeIncluded && languageIncluded;
  });

  // 위 조건을 만족한 가이드 중
  // 세부지역(시/구/군) 일치 시 +5, 선호 테마 한개 일치당 +1, 불호 테마 한개 일치당 -1 로 계산하여 점수를 산정
  const scoredGuides = _.chain(filteredGuides)
    .map((guide) => {
      let placeScore = 0;
      if (_.includes(guide.place.places, place)) placeScore = 5;

      const likeThemeScore = _.filter(guide.themes, (theme) =>
        _.includes(likeThemes, theme),
      ).length;

      const dislikeThemeScore = _.filter(guide.themes, (theme) =>
        _.includes(dislikeThemes, theme),
      ).length;

      const score = placeScore + likeThemeScore - dislikeThemeScore;
      return { guide, score };
    })
    .sortBy('score')
    .value()
    .reverse();

  return scoredGuides;
};
