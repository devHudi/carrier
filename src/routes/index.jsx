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
  Review,
} from 'pages';
import { ResWarning } from 'carrier-ui';
import RecommendResult from 'pages/RecommendResult';

// 라우트명은 kebab-case 로 작성합니다

const BodyStyle = createGlobalStyle`
  body {
    background-color: ${(props) => {
      if (props.color) return props.color;
      return props.theme.colors.primary;
    }}
  }
`;

const Router = () => (
  <BrowserRouter>
    <ResWarning />
    <Switch>
      <Route exact path="/">
        <BodyStyle color="#E6E6E6" />
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
        <BodyStyle color="#EEEFFF" />
        <HireResultMore />
      </Route>
      <Route exact path="/sign-in">
        <BodyStyle color="#FFFFFF" />
        <SignIn />
      </Route>
      <Route exact path="/sign-up">
        <BodyStyle color="#FFFFFF" />
        <SignUp />
      </Route>
      <Route exact path="/sign-up/success">
        <BodyStyle color="#FFFFFF" />
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
      <Route exact path="/guide/profile">
        <GuideProfile />
      </Route>
      <Route exact path="/profile/edit">
        내 프로필 수정
      </Route>
      <Route exact path="/firebase-examples">
        <BodyStyle color="#FFFFFF" />
        <FirebaseExample />
      </Route>
      <Route path="/review">
        <Review />
      </Route>
      <Route path="/result">
        <RecommendResult />
      </Route>
      <Route path="/*">
        <BodyStyle color="#FFFFFF" />
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
