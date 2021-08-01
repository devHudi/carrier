import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from 'pages';

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
