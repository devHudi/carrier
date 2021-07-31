# CARRIER

## Project Stack

**Front-end**

- React
- Styled Components
- React Router
- Redux
- lodash
- dayjs
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
  - Super Linter
  - Auto Assign
- Netlify

## Branch Strategy

간략화된 Git-Flow 전략을 사용합니다. (참고: https://techblog.woowahan.com/2553/)

- `master`: 제품으로 출시된 브랜치
- `develop`: 다음 출시 버전을 개발하는 브랜치
  - `feature/yyyymmdd-branch-name` : 각 기능별 브랜치
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

### 개발 서버 실행

아래 명령을 통해 프로젝트를 시작할 수 있습니다.

```
yarn start
```

## Coding Conventions

- 모든 리액트 파일은 `.jsx` 확장자로 작성해주세요.
- 레이아웃 작성 시 `position`, `float` 사용을 최대한 지양해주시고, `flex` 를 사용해주세요.

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
