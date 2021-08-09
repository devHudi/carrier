import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import {
  Hire,
  HireResult,
  HireResultMore,
  SignUpSuccess,
  FirebaseExample,
  Chat,
  ChatList,
  Search,
  Intro,
  SignIn,
  SignUp,
  NotFound,
  GuideProfile,
  TravelerProfile,
} from 'pages';

// 라우트명은 kebab-case 로 작성합니다

const BodyStyle = createGlobalStyle`
  body {
    background-color: ${(props) => {
      if (props.white) return props.theme.colors.white;
      if (props.light) return '#EEEFFF';
      return props.theme.colors.primary;
    }}
  }
`;

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <BodyStyle white />
        <Intro />
      </Route>
      <Route exact path="/search">
        <BodyStyle />
        <Search />
      </Route>
      <Route exact path="/hire">
        <BodyStyle />
        <Hire />
      </Route>
      <Route exact path="/hire/:submitId/result">
        <BodyStyle />
        <HireResult />
      </Route>
      <Route exact path="/hire/:submitId/result/more">
        <BodyStyle light />
        <HireResultMore />
      </Route>
      <Route exact path="/sign-in">
        <BodyStyle white />
        <SignIn />
      </Route>
      <Route exact path="/sign-up">
        <BodyStyle white />
        <SignUp />
      </Route>
      <Route exact path="/sign-up/success">
        <BodyStyle white />
        <SignUpSuccess />
      </Route>
      <Route exact path="/chat/:uid">
        <BodyStyle />
        <Chat />
      </Route>
      <Route exact path="/chat">
        <BodyStyle />
        <ChatList />
      </Route>
      <Route exact path="/Travelerprofile">
        <TravelerProfile />
      </Route>
      <Route exact path="/profile/:uid">
        <GuideProfile />
      </Route>
      <Route exact path="/profile/edit">
        내 프로필 수정
      </Route>
      <Route exact path="/firebase-examples">
        <BodyStyle white />
        <FirebaseExample />
      </Route>
      <Route path="/*">
        <BodyStyle white />
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
