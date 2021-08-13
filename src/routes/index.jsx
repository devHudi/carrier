import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import {
  Hire,
  HireResult,
  HireResultMore,
  SignUpSuccess,
  Chat,
  ChatList,
  Search,
  Intro,
  SignIn,
  SignUp,
  NotFound,
  GuideProfile,
  TravelerProfile,
  RecommendResult,
  ProfileEdit,
  BackOfficeList,
  BackOfficeRoom,
} from 'pages';
import { Tutorial, ResWarning } from 'carrier-ui';

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
    <Tutorial />
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
      <Route exact path="/profile">
        <TravelerProfile />
      </Route>
      <Route exact path="/profile/edit">
        <ProfileEdit />
      </Route>
      <Route exact path="/profile/:uid">
        <GuideProfile />
      </Route>
      <Route exact path="/back-office">
        <BodyStyle />
        <BackOfficeList />
      </Route>
      <Route exact path="/back-office/:uid">
        <BodyStyle color="#FFFFFF" />
        <BackOfficeRoom />
      </Route>
      <Route path="/result">
        <RecommendResult />
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
