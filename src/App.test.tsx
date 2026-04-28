import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

beforeEach(() => {
  window.history.pushState({}, '', '/')
  localStorage.clear()
})

describe('React Quest MVP', () => {
  it('renders the Korean React Quest home with official documentation positioning', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /React Quest/i })).toBeInTheDocument()
    expect(screen.getByText(/ko\.react\.dev 공식 문서/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /코스 맵 보기/i })).toHaveAttribute('href', '/quest')
    expect(screen.getByText(/읽고, 고치고, 실행하면서 React를 배운다/i)).toBeInTheDocument()
  })

  it('shows the MVP course map and React Learn sections', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /코스 맵 보기/i }))

    expect(screen.getByRole('heading', { name: /Quest Map/i })).toBeInTheDocument()
    expect(screen.getByText('UI 표현하기')).toBeInTheDocument()
    expect(screen.getByText('상호작용 추가하기')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /State와 useState/i })).toHaveAttribute('href', '/quest/state-usestate')
  })

  it('opens a lesson with objectives, official docs, quiz, and practice CTA', () => {
    window.history.pushState({}, '', '/quest/state-usestate')
    render(<App />)

    expect(screen.getByRole('heading', { name: /State와 useState/i })).toBeInTheDocument()
    expect(screen.getByText(/state가 왜 필요한지 설명할 수 있다/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /State: 컴포넌트의 기억/i })).toHaveAttribute(
      'href',
      'https://ko.react.dev/learn/state-a-components-memory',
    )
    expect(screen.getByText(/일반 변수와 state의 차이는/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /실습 시작하기/i })).toHaveAttribute('href', '/quest/state-usestate/practice')
  })

  it('checks a quiz answer and persists quiz progress', async () => {
    const user = userEvent.setup()
    window.history.pushState({}, '', '/quest/state-usestate')
    render(<App />)

    const quiz = screen.getByTestId('quiz-state-basic-1')
    await user.click(within(quiz).getByRole('button', { name: /일반 변수는 React에 의해 기억되지 않는다/i }))

    expect(within(quiz).getByText(/정답입니다/i)).toBeInTheDocument()
    expect(within(quiz).getByText(/useState를 사용하면 값을 기억하고 다시 렌더링할 수 있다/i)).toBeInTheDocument()
    expect(localStorage.getItem('react-quest-progress')).toContain('state-basic-1')
  })

  it('shows a component-building practice that matches the selected lesson', () => {
    window.history.pushState({}, '', '/quest/first-component/practice')
    render(<App />)

    expect(screen.getAllByText(/프로필 카드를 컴포넌트로 만들기/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/ProfileCard/i).length).toBeGreaterThan(0)
    expect(screen.getByTestId('sandpack-preview')).toHaveAttribute('data-active-file', '/App.js')
    expect(screen.queryByText(/깨진 카운터를 state로 고치기/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Hello world/i)).not.toBeInTheDocument()
  })

  it('renders the selected JSX practice code in the live preview instead of Sandpack defaults', () => {
    window.history.pushState({}, '', '/quest/jsx-basics/practice')
    render(<App />)

    expect(screen.getAllByText(/JSX 표현식 고치기/i).length).toBeGreaterThan(0)
    expect(screen.getByTestId('sandpack-preview')).toHaveAttribute('data-active-file', '/App.js')
    expect(screen.getByText(/React Explorer/i)).toBeInTheDocument()
    expect(screen.queryByText(/Hello world/i)).not.toBeInTheDocument()
  })

  it('lets learners choose an additional curated practice for the same lesson', async () => {
    const user = userEvent.setup()
    window.history.pushState({}, '', '/quest/props/practice')
    render(<App />)

    expect(screen.getAllByText(/Props로 아바타 정보 전달하기/i).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: /children으로 카드 감싸기/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /children으로 카드 감싸기/i }))

    expect(screen.getAllByText(/children으로 카드 감싸기/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Card 컴포넌트/i)).toBeInTheDocument()
    expect(screen.getAllByText(/알림 카드/i).length).toBeGreaterThan(0)
    expect(localStorage.getItem('react-quest-progress')).not.toContain('compose-card-with-children')
  })

  it('reveals practice hints and marks the exercise complete', async () => {
    const user = userEvent.setup()
    window.history.pushState({}, '', '/quest/state-usestate/practice')
    render(<App />)

    expect(screen.getByTestId('sandpack-preview')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /힌트 보기/i }))
    expect(screen.getByText(/일반 변수 변경은 React에게 다시 렌더링하라고 알려주지 않습니다/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /실습 완료/i }))
    expect(localStorage.getItem('react-quest-progress')).toContain('fix-counter-state')
    expect(screen.getByText(/완료됨/i)).toBeInTheDocument()
  })

  it('renders persistent shell navigation with home and official docs links', () => {
    window.history.pushState({}, '', '/quest')
    render(<App />)

    expect(screen.getByRole('link', { name: /React Quest home/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('navigation', { name: /Main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Quest Map' })).toHaveAttribute('href', '/quest')
    expect(screen.getByRole('link', { name: 'ko.react.dev' })).toHaveAttribute('href', 'https://ko.react.dev/')
  })

  it('uses saved lesson progress to calculate the home progress and next recommendation', () => {
    localStorage.setItem(
      'react-quest-progress',
      JSON.stringify({
        completedLessonIds: ['react-intro', 'first-component'],
        completedExerciseIds: [],
        completedQuizIds: [],
        incorrectQuizIds: [],
        bookmarkedLessonIds: [],
      }),
    )

    render(<App />)

    expect(screen.getByText('20%')).toBeInTheDocument()
    expect(screen.getByLabelText('진행률 20%')).toBeInTheDocument()
    expect(screen.getByText(/다음 추천 퀘스트: JSX 이해하기/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /이어서 학습하기/i })).toHaveAttribute('href', '/quest/jsx-basics')
  })

  it('shows completed lesson status on the course map from saved progress', () => {
    localStorage.setItem(
      'react-quest-progress',
      JSON.stringify({
        completedLessonIds: ['react-intro'],
        completedExerciseIds: [],
        completedQuizIds: [],
        incorrectQuizIds: [],
        bookmarkedLessonIds: [],
      }),
    )
    window.history.pushState({}, '', '/quest')

    render(<App />)

    const completedCard = screen.getByRole('link', { name: /React는 무엇인가 퀘스트 열기/i }).closest('article')
    expect(completedCard).not.toBeNull()
    expect(within(completedCard as HTMLElement).getByText('완료')).toBeInTheDocument()
  })

  it('records the last opened lesson when a lesson page is visited', () => {
    window.history.pushState({}, '', '/quest/props')
    render(<App />)

    expect(localStorage.getItem('react-quest-progress')).toContain('"lastOpenedLessonId":"props"')
  })

  it('shows a recovery link for an unknown lesson route', () => {
    window.history.pushState({}, '', '/quest/not-a-real-lesson')
    render(<App />)

    expect(screen.getByRole('heading', { name: /퀘스트를 찾을 수 없습니다/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Quest Map으로 돌아가기/i })).toHaveAttribute('href', '/quest')
  })

  it('lets learners reveal and reset the practice solution preview', async () => {
    const user = userEvent.setup()
    window.history.pushState({}, '', '/quest/events/practice')
    render(<App />)

    expect(screen.getByText(/onClick=\{handleClick\(\)\}/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /정답 보기/i }))
    expect(screen.getByText(/onClick=\{handleClick\}/i)).toBeInTheDocument()
    expect(screen.getByText(/이벤트 핸들러를 JSX prop으로 전달/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /초기화/i }))
    expect(screen.getByText(/onClick=\{handleClick\(\)\}/i)).toBeInTheDocument()
  })
})
