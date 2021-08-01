const req = require.context('.', true, /\.(\/[^/]+)*\/index\.jsx$/);

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.jsx/, '$1');

  Object.keys(req(key)).forEach((item) => {
    if (item === 'default') {
      module.exports[componentName] = req(key)[item];
    } else {
      module.exports[item] = req(key)[item];
    }
  });
});

// 컴포넌트들을 작성해 둔 폴더 입니다. 
// 해당 컴포넌트의 사용은 기본적으로 HTML 문법의 태그와 동일한 기능을 가집니다. 여기서 추가되는 사항들은 
// 제가 직접 props들을 설정하여 임의로 사용한 것입니다. 얼마든지 여러분 마음껏 각자의 페이지에 들어가서 상속받아서 사용이 가능합니다.