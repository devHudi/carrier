import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, Hire, SignUpSuccess, FirebaseExample } from 'pages';
import ChatList from 'pages/ChatList';
import Chat from 'pages/Chat';

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/search">
        여행지 검색 페이지
      </Route>
      <Route exact path="/hire">
        <Hire />
      </Route>
      <Route exact path="/hire/result">
        가이드 추천 결과
      </Route>
      <Route exact path="/hire/result/more">
        가이드 더보기
      </Route>
      <Route exact path="/sign-in">
        로그인 페이지
      </Route>
      <Route exact path="/sign-up">
        회원가입 페이지
      </Route>
      <Route exact path="/sign-up/success">
        <SignUpSuccess />
      </Route>
      <Route exact path="/chat/:uid">
        <Chat />
      </Route>
      <Route exact path="/chat">
        <ChatList />
      </Route>
      <Route exact path="/profile">
        내 프로필
      </Route>
      <Route exact path="/profile/:uid">
        특정 사용자 프로필
      </Route>
      <Route exact path="/profile/edit">
        내 프로필 수정
      </Route>
      <Route exact path="/firebase-examples">
        <FirebaseExample />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
