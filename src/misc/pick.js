import _ from 'lodash';

export default (arr, length) => {
  const _arr = arr;
  const count = length || _.random(1, _arr.length - 1);
  const picks = [];
  for (let i = 0; i < count; i += 1) {
    const p = _arr.splice(_.random(0, _arr.length - 1), 1)[0];
    picks.push(p);
  }
  return picks;
};
