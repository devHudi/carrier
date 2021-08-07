# CARRIER

본 프로젝트는 멋쟁이 사자처럼 인하대학교 9기에서 멋쟁이 사자처럼 중앙 해커톤에 출품하기 위한 프로젝트입니다.

## Project Stack

**Front-end**

- React
- Styled Components
- React Router
- Redux
- lodash
- moment
- slick
- react-dates

**Back-end**

- Firebase
  - Firestore
  - FCM (Firebase Cloud Message)
  - Auth
  - Storage

**Devops**

- Github Actions
  - Auto Assign
- Netlify

## Branch Strategy

간략화된 Git-Flow 전략을 사용합니다. (참고: https://techblog.woowahan.com/2553/)

- `master`: 제품으로 출시된 브랜치
  - `feature/yymmdd-branch-name` : 각 기능별 브랜치
- `hotfix`: 출시 버전에서 발생한 버그수정 브랜치

## Commit Message Convention

```
type: commit message
```

모든 커밋 메세지는 명령문 (현재시제) 를 사용하여 작성합니다. 모든 커밋 메세지 앞에는 다음의 `type` 을 작성합니다.

- `feat`: 새로운 기능 추가
- `fix`: 버그수정
- `docs`: 문서수정
- `style`: 코드 포매팅 등
- `refactor`: 코드 리팩토링
- `chore`: 기타 작업

## Getting Started

### 패키지 매니저 설치

NPM 대신 Yarn을 사용합니다.

```
$ npm install -g yarn
```

위 명령을 통해 Yarn 을 설치해주세요.

### 패키지 설치

```
$ yarn
```

위 명령을 통해 모든 Dependencies 를 설치합니다.

### 개발 서버 실행

아래 명령을 통해 프로젝트를 시작할 수 있습니다.

```
$ yarn start
```

### Prettier

본 프로젝트는 Prettier 를 이용하여, 코드를 포매팅 합니다.

VSCode Extension 에서 Prettier 를 검색하여 설치해주세요. 그리고 Preferences > Settings 에서 Default Formatter 를 Prettier 로 설정해주신 다음, Format on Save 를 True 로 변경해주세요. 이 과정을 거치면 코드를 저장할 때마다 코드가 보기좋게 정리됩니다.

### ESLint

본 프로젝트는 ESLint 를 사용하여 코드를 검사합니다.

VSCode Extension 에서 ESLint 를 검색하여 설치해주세요.

## Coding Conventions

- 모든 리액트 파일은 `.jsx` 확장자로 작성해주세요.
- 레이아웃 작성 시 `position`, `float` 사용을 최대한 지양해주시고, `flex` 를 사용해주세요.
- 비동기 처리 시 `then ~ catch` 대신 `async ~ await` 를 사용해주세요.
- 모든 라우트명은 `kebab-case` 로 작성해주세요.
- 특별한일이 없는 이상 색상은 styled components 의 theme 을 사용해주세요.

## Contributors

<table>
   <tr>
      <td align="center"><a href="https://github.com/devHudi"><img src="https://avatars.githubusercontent.com/u/11745691?v=4" width="100px;" alt=""/><br /><sub><b>devHudi<br/>(Donghyun Cho)</b></sub></a></td>
      <td align="center"><a href="https://github.com/adultlee"><img src="https://avatars.githubusercontent.com/u/77886826?v=4" width="100px;" alt=""/><br /><sub><b>adultlee<br/>(SeongIn Lee)</b></sub></a></td>
      <td align="center"><a href="https://github.com/dlwnsgus07"><img src="https://avatars.githubusercontent.com/u/37991960?v=4" width="100px;" alt=""/><br /><sub><b>dlwnsgus07<br/>(Junhyun Lee)</b></sub></a></td>
      <td align="center"><a href="https://github.com/pcpark98"><img src="https://avatars.githubusercontent.com/u/34507976?v=4" width="100px;" alt=""/><br /><sub><b>pcpark98<br/>(SangJun Park)</b></sub></a></td>
      <td align="center"><a href="https://github.com/yeonsooSo"><img src="https://avatars.githubusercontent.com/u/65909443?v=4" width="100px;" alt=""/><br /><sub><b>yeonsooSo<br/>(YeongSoo So)</b></sub></a></td>
      <td align="center"><a href="https://github.com/jiae0119"><img src="https://avatars.githubusercontent.com/u/82093525?v=4" width="100px;" alt=""/><br /><sub><b>jiae0119<br/>(JiAe Shin)</b></sub></a></td>
   </tr>
</table>
