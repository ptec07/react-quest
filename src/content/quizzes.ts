import type { Quiz } from '../features/lessons/types'

export const quizzes: Quiz[] = [
  {
    id: 'state-basic-1',
    lessonId: 'state-usestate',
    type: 'multiple-choice',
    question: '일반 변수와 state의 차이는 무엇인가?',
    choices: ['일반 변수는 React에 의해 기억되지 않는다', '일반 변수는 JavaScript에서 사용할 수 없다', 'state는 CSS를 자동 생성한다'],
    answer: '일반 변수는 React에 의해 기억되지 않는다',
    explanation: '정답입니다. useState를 사용하면 값을 기억하고 다시 렌더링할 수 있다.',
  },
  {
    id: 'state-basic-2',
    lessonId: 'state-usestate',
    type: 'multiple-choice',
    question: '버튼 클릭 횟수처럼 시간이 지나며 바뀌고 화면에 보여야 하는 값은 어디에 두는 것이 좋은가?',
    choices: ['state', '상수', 'HTML 주석'],
    answer: 'state',
    explanation: '화면에 영향을 주는 변화 값은 state로 관리하는 것이 자연스럽습니다.',
  },
  {
    id: 'state-basic-3',
    lessonId: 'state-usestate',
    type: 'true-false',
    question: 'setState 계열 함수는 React에게 다시 렌더링이 필요하다는 신호를 준다.',
    choices: ['O', 'X'],
    answer: 'O',
    explanation: '맞습니다. state 업데이트는 다음 렌더링을 예약합니다.',
  },
]

export function getQuizzesForLesson(lessonId: string) {
  return quizzes.filter((quiz) => quiz.lessonId === lessonId)
}
