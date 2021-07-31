# CARRIER

## Project Stack

**Front-end**

- React
- Styled Components
- React Router

**Back-end**

- Firebase
  - Firestore
  - FCM (Firebase Cloud Message)

## Branch Strategy

간략화된 Git-Flow 전략을 사용합니다. (참고: https://techblog.woowahan.com/2553/)

- master: 제품으로 출시된 브랜치
- develop: 다음 출시 버전을 개발하는 브랜치
  - feature/yyyymmdd-branch-name : 각 기능별 브랜치
- hotfix: 출시 버전에서 발생한 버그수정 브랜치

## Commit Message Convention

```
type: commit message
```

모든 커밋 메세지는 명령문 (현재시제) 를 사용하여 작성합니다. 모든 커밋 메세지 앞에는 다음의 `type` 을 작성합니다.

- feat: 새로운 기능 추가
- fix: 버그수정
- docs: 문서수정
- style: 코드 포매팅 등
- refactor: 코드 리팩토링
- chore: 기타 작업

## Getting Started

```
yarn start
```
