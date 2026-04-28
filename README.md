# React Quest

React Quest는 [ko.react.dev](https://ko.react.dev/) 공식 문서의 학습 흐름을 따라가며 React를 실습하는 한국어 학습 웹앱 MVP입니다.

## MVP 기능

- React 공식 문서 기반 퀘스트 맵
- 10개 입문 단원 데이터
- 단원 상세: 목표, 설명, 공식 문서 링크, 퀴즈
- Sandpack 기반 코드 실습
- localStorage 진도 저장

## 실행

```bash
npm install
npm run dev
```

## 테스트

```bash
npm test -- --run
npm run build
```

## 콘텐츠 추가

- 단원: `src/content/lessons.ts`
- 퀴즈: `src/content/quizzes.ts`
- 실습: `src/content/exercises.ts`

공식 문서 본문을 대량 복제하지 않고, 자체 설명과 실습을 제공하며 각 단원에 공식 문서 링크를 연결합니다.
